import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const tableName = 'pencho';
export const supabase = createClient(supabaseUrl, supabaseKey);

const getPenchoRT = (pageNo: number, pageSize: number) => {
    // let {data}
    // supabase.

    supabase
        .channel('room1')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'pencho' }, payload => {
            console.log('Change received!', payload)
        })
        .subscribe()
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

export { getPencho, getPenchoRT, addPencho, upvotePencho };

// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://your-project-url.supabase.co'
// const supabaseKey = 'your-anon-key'
// const supabase = createClient(supabaseUrl, supabaseKey)

// const query = `
//   SELECT name, marks
//   FROM students
//   ORDER BY marks DESC
//   LIMIT 10
// `

// const subscription = supabase
//   .from('students')
//   .on('INSERT', query)
//   .on('UPDATE', query)
//   .on('DELETE', query)
//   .subscribe((payload) => {
//     console.log(payload.new)
//   })