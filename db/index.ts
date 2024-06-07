import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { pencho } from './schema'
import { desc, eq, gt, sql } from 'drizzle-orm'
import { count } from 'console'

const connectionString = process.env.NEXT_PUBLIC_SUPABASE_CONNECTION_STRING
const client = postgres(connectionString, { prepare: false })
const db = drizzle(client);

const getPenchoCount = async () => {
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
    const value= await db.insert(pencho).values({ title, description }).returning().execute();
    // console.log(value);
    return value;
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

const getPenchoById = async (id: string) => {
  try {
    const result=await db.select().from(pencho).where(eq(pencho.id, id)).execute();
    return result;
  } catch (error) {
    console.error('Error upvoting pencho:', error);
    throw error;
  }
}
const getPenchoRankById=async (id:string)=>{
  try {
    const currPencho=await db.select().from(pencho).where(eq(pencho.id, id)).execute();
    const count = (await db.select({ count: sql<number>`count(*)` }).from(pencho).where(gt(pencho.upvotes, currPencho[0].upvotes)))[0].count
    return count;

  } catch (error) {
    console.error('Error upvoting pencho:', error);
    throw error;
  }
}

export { getPencho, addPencho, upvotePencho, getPenchoCount,getPenchoById ,getPenchoRankById};
