"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: "last_name",
      },
      email: {
        type: DataTypes.STRING(),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(64),
        allowNull: false,
        field: "password_hash",
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        field: "is_male",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      tableName: 'users'
    }
  );
  return User;
};
