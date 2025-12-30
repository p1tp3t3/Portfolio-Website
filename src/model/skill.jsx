import { sb_db } from "../supabase-config"

export class Skill {

    constructor(data) {
        this.data = data
        this.table = 'skill'
    }

    async create() {
        const { data, error } = await sb_db
            .from(this.table)
            .insert([...this.data])
            .select()

        if(error) console.log('error: ', error)
        
        return data
    }

    async delete(id) {
        const { error } = await supabase
            .from(this.table)
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async list() {
        let get = null
        const { data, error } = await sb_db
            .from(this.table)
            .select("*");

        if (error) {
            get = error.message;
        } else {
            get = data;
        }
    }   
}