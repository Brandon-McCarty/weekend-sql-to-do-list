CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (255),
	"status" BOOLEAN DEFAULT FALSE,
	"date_completed" VARCHAR(20)
	);


INSERT INTO "todo" (
	"task"
) VALUES ('clean room'), ('water plants'), ('walk the dog'), ('vacuum my cactus'); 