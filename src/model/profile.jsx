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
                skill:skill(*)
            `)
            .maybeSingle()


        if (error) throw error
        return data // object or null
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
        const { error } = await sb_db.rpc("update_profile_and_contact", {
            p_profile_id: id,
            p_profile: this.data['profile'],
            p_contact: this.data['contact']
        })

        if(error) console.log('error: ', error)
    }
}
