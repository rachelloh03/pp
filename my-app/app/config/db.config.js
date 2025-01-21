module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Fangpi_123",
  DB: "user_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
