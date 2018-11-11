/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    id_cliente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rut: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    auto_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'autos',
        key: 'id_auto'
      }
    }
  }, {
    tableName: 'clientes',
    timestamps: false
  });
};
