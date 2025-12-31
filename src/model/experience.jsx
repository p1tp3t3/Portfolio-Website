import { sb_db } from "../supabase-config";

export class Experience {
    constructor(data) {
        this.table = 'experience'
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

    async delete(id) {
        // Delete the record
        const { error: deleteError } = await sb_db
            .from(this.table)
            .delete()
            .eq("id", id);

        if (deleteError) throw deleteError;

        // Fetch updated list
        const { data, error: fetchError } = await sb_db
            .from(this.table)
            .select("*")
            .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;

        return data;

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