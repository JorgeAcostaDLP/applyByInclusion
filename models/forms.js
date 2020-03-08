'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeForm = sequelize.define(
    'Forms',
    {
      textInput: DataTypes.STRING,
      textArea: DataTypes.TEXT,
      checkBox: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      date: DataTypes.DATE,
      adminId: DataTypes.INTEGER,
      comment: DataTypes.TEXT
    },
    {}
  );

  class Forms extends SequelizeForm {
    static async all() {
      return await this.findAll();
    }
  }

  return Forms;
};
