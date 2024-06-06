ALTER TABLE "pencho" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "pencho" ALTER COLUMN "upvotes" SET DEFAULT 0;--> statement-breakpoint
ALTER TABLE "pencho" ALTER COLUMN "created_at" SET DEFAULT now();