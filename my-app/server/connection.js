import pg from "pg";
const client = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "user_db",
  password: "Fangpi_123",
  port: 5432,
});

export default client;
