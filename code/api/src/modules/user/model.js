'use strict'

// User
// defines User model 
// will need to add more for shipping address, crate subscriptions, product sent, product kept
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.STRING
    },
    shippingAddress: {
      type: DataTypes.DATEONLY
    },
    shipDate: {
      type: DataTypes.DATEONLY
    },
    imageUrl: {
      type: DataTypes.STRING
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}