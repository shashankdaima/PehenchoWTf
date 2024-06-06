CREATE TABLE IF NOT EXISTS "pencho" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text,
	"description" text,
	"upvotes" integer,
	"created_at" timestamp
);
