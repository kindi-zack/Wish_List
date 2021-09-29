'use strict';
const { hashPassword } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
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
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "email can\'t be empty"
        },
        isEmail: {
          args: true,
          msg: 'must use email format'
        }
      }
    },
    password:{
      type:  DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "password can\'t be empty"
        }
      }
    },
    saldo: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};