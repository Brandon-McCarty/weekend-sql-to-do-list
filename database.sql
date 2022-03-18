CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (255),
	"status" BOOLEAN DEFAULT FALSE
	);

INSERT INTO "todo" (
	"task"
) VALUES ('clean room'), ('water plants'), ('walk the dog'); 