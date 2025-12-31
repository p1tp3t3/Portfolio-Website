import { sb_db } from "../supabase-config"

export class Profile {

    constructor(data) {
        this.table = 'profile'
        this.data = data
    }

   async getProfile() {
  const { data, error } = await sb_db
    .from(this.table)
    .select(`
      *,
      contact:contact(*),
      project:project(*),
      skill:skill(*),
      experience:experience(*),
      event:event(*)
    `)
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  return {
    ...data,
    project: data.project?.sort(
      (a, b) => new Date(b.date_started) - new Date(a.date_started)
    ) || [],
    experience: data.experience?.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    ) || [],
    event: data.event?.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    ) || [],
  };
}


    getProfilePicture() {
        const { data: publicUrl, error } = sb_db
            .storage
            .from("image") // your bucket name
            .getPublicUrl('profile-pic.jpg');

        if (error) {
            console.error("Error getting public URL:", error);
        }
        
        return publicUrl.publicUrl
    }
    getIcon() {
        const { data: publicUrl, error } = sb_db
            .storage
            .from("image") // your bucket name
            .getPublicUrl('main-icon.jpg');

        if (error) {
            console.error("Error getting public URL:", error);
        }
        
        return publicUrl.publicUrl
    }
    getCurriculumVitae() {
        // Generate a signed URL valid for 60 seconds
        const { data, error } = sb_db.storage
            .from('curriculum_vitae')
            .getPublicUrl('curriculum_vitae.pdf');

        if (error) {
            console.error("Error generating signed URL:", error);
            return;
        }

        window.open(data.publicUrl, "_blank");
    }

    async getAuthProfile() {
        const { data, error } = await sb_db
            .from(this.table)
            .select(`
                *,
                contact:contact(*)
            `)
            .maybeSingle()


        if (error) throw error
        return data // object or null
    }

    async updateProfile(id) {
        console.log(this.data)
        const { error } = await sb_db.rpc("update_profile_and_contact", {
            p_profile_id: id,
            p_profile: this.data['profile'],
            p_contact: this.data['contact']
        })

        if(error) console.log('error: ', error)
    }
}
