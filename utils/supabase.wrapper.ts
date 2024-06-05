import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const tableName='pencho';
export const supabase = createClient(supabaseUrl, supabaseKey);

const getPenchoRT = (pageNo: number, pageSize: number) => {

}

const getPencho = async (pageNo: number, pageSize: number) => {
    let { data: pencho, error } = await supabase
        .from(tableName)
        .select('*')
    console.log(pencho, error);
}

const addPencho = (content: string) => {

}

const upvotePencho = (uuid: string) => {

}

export {getPencho, getPenchoRT, addPencho, upvotePencho};