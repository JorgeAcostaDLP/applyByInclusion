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
        createdAt: date
      });
      return newForm;
    }

    //this method will search for a form with a particular ID and add an adminId as well as a comment to it,
    static async update(formId, adminId, comment) {
      const updatedForm = await this.update(
        {
          comment: comment,
          adminId: adminId
        },
        { where: { id: formId } }
      );
    }
  }

  return Forms;
};
