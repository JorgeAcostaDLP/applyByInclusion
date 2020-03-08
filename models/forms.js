'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeForm = sequelize.define(
    'Forms',
    {
      textInput: DataTypes.STRING,
      textArea: DataTypes.TEXT,
      checkBox: DataTypes.BOOLEAN,
      date: DataTypes.DATE,
      createdAt: DataTypes.DATE
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
