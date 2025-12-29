import { sb_db } from "../supabase-config";

export class Profile {
    constructor(data) {
        this.data = data
        this.table = 'profile'
    }

    async update(id) {
        const { data, error } = await supabase
            .from(this.table)
            .update(this.data)
            .eq("id", id)
            .select();

        if (error) throw error;
        return data;
    }
}