'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeForms = sequelize.define(
    'Forms',
    {
      textInput: DataTypes.STRING,
      textArea: DataTypes.TEXT,
      checkBox: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      date: DataTypes.DATE
    },
    {}
  );

  class Forms extends SequelizeForms {
    static async all() {
      return await this.findAll();
    }
  }

  return Forms;
};
