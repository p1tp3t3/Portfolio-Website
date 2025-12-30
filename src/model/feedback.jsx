import { sb_db } from "../supabase-config";

export class FeedBack {
    constructor(data) {
        this.data = data
        this.table = 'feedback'
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
        const { error } = await sb_db
            .from(this.table)
            .delete()
            .eq("id", id);

        if (error) throw error;
    }

    async list() {
        const { data, error } = await sb_db
            .from(this.table)
            .order("created_at", { ascending: false })
            .select('*');

        if (error) throw error;
        return data;
    }

}