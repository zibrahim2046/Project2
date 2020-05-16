module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    rent: DataTypes.INTEGER,
    gas: DataTypes.INTEGER,
    groceries: DataTypes.INTEGER,
    utilities: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    car: DataTypes.INTEGER,
    misc: DataTypes.INTEGER,
    entertainment: DataTypes.INTEGER,
    budget: DataTypes.INTEGER
  });
  return User;
};
