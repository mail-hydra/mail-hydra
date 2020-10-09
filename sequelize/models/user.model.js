const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: 'email'
    },
    hash: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: 0
    }
  })
}
