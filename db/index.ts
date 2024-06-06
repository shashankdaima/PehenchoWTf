import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { pencho } from './schema'
import { desc, eq, sql } from 'drizzle-orm'
import { count } from 'console'

const connectionString = process.env.NEXT_PUBLIC_SUPABASE_CONNECTION_STRING
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);

const getPenchoCount=async ()=>{
  try {
    const count = (await db.select({ count: sql<number>`count(*)` }).from(pencho))[0].count
    return count;
  } catch (error) {
    console.error('Error fetching penchos:', error);
    throw error;
  }
}

const getPencho = async (pageNo: number, pageSize: number) => {
  try {
    const result = await db.select().from(pencho).orderBy(desc(pencho.upvotes))
      .limit(pageSize).offset(pageNo * pageSize)
      .execute();
    return result;
  } catch (error) {
    console.error('Error fetching penchos:', error);
    throw error;
  }
}

const addPencho = async (title: string, description: string) => {
  try {
    const now = new Date().toISOString();
    await db.insert(pencho).values({ title, description }).execute();
  } catch (error) {
    console.error('Error adding pencho:', error);
    throw error;
  }
}

const upvotePencho = async (id: string) => {
  try {

    await db.update(pencho).set({ upvotes: sql`${pencho.upvotes} + 1` }).where(eq(pencho.id, id)).execute();
  } catch (error) {
    console.error('Error upvoting pencho:', error);
    throw error;
  }
}

export { getPencho, addPencho, upvotePencho ,getPenchoCount};
