module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    monthlyExpenses: DataTypes.INTEGER,
    budget: DataTypes.INTEGER
  });
  return User;
};
