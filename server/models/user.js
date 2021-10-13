'use strict';
const { hashPswd } = require('../helpers/bcrypt')
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
      User.hasMany(models.Wishlist, {
        foreignKey: 'UserId'
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'use email format'
        },
        notEmpty: {
          args: true,
          msg: 'email can not be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password can not be empty'
        }
      }
    },
    saldo: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate (instance, opt) {
        instance.password = hashPswd(instance.password)
      }  
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};