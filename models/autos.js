/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autos', {
    id_auto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    marca: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    anio: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'autos',
    timestamps: false
  });
};
