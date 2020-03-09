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
    static async newForm(textInput, textArea, checkBox, date) {
      const newForm = await this.create({
        textInput: textInput,
        textArea: textArea,
        checkBox: checkBox,
        date: date,
        createdAt: new Date()
      });
      return newForm;
    }
    static async newForm(textInput, textArea, checkBox, date) {
      const newForm = await this.create({
        textInput: textInput,
        textArea: textArea,
        checkBox: checkBox,
        date: date,
        createdAt: new Date()
      });
      return newForm;
    }
  }

  return Forms;
};
