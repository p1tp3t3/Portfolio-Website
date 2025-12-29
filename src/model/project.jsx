import { sb_db } from "../supabase-config";

export class Project {

    constructor(data) {
        this.data = data
        this.table = 'project'
    }

    async create() {
        const newData = this.data

        const { data, error } = await supabase
            .from(this.table)
            .insert([
            {
                name: newData['name'],
                date_started: newData['date-started'],
                date_started: newData['date-started'],
                date_finised: newData['date-finished'],
                category: newData['category'],
                description: newData['description'],
                repo_link: newData['repo-link']
            }
            ])
            .select();

        if (error) throw error;
        return data;
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
        return get
    }
}