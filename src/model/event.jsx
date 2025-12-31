import { sb_db } from "../supabase-config"

export class Event {
    constructor(data) {
        this.table = 'event'
        this.data = data
    }

    async create() {
        const newData = this.data

        const { data, error } = await sb_db
            .from(this.table)
            .insert([{...newData}])
            .select();

        if (error) throw error;
        return data;
    }
    
    async update() {

    }

    async delete() {

    }
    
    async list() {
        const { data, error } = await sb_db
            .from(this.table)
            .select()
            .order("created_at", { ascending: false });

        if (error) throw error

        return data
    }
}