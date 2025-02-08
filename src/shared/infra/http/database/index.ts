import { createConnection } from "typeorm";

createConnection()
  .then(async () => {
    console.log("Database connection established successfully");
  })
  .catch((error) => console.log("Error connecting to database: ", error));
