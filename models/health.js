module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    name: {
      type: DataTypes.STRING
      allowNull: false,
      validate: {
      len: [1, 50]
}
  },
    amount: {
      type: DataTypes.INTEGER
},
   fullness: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
},
   mood: {
      type: DataTypes.STRING
}
}, {
  timestamps: false
});
return Food;
};
