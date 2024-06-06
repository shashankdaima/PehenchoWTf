import { pgTable, uuid, text, integer, timestamp } from "drizzle-orm/pg-core";

export const pencho = pgTable('pencho', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title'),
  description: text('description'),
  upvotes: integer('upvotes').default(0),
  created_at: timestamp('created_at').defaultNow(),
});
