module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.VARCHAR(20),
    },
    password: {
      type: Sequelize.VARCHAR(100),
    },
    email: {
      type: Sequelize.VARCHAR(200),
    },
  });
  return User;
};
