const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('Forward', {
    id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    createDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    changeDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  })
}
