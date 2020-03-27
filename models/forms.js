'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeForms = sequelize.define(
    'Forms',
    {
      status: DataTypes.STRING,
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
        createdAt: date,
        status: 'New'
      });
      return newForm;
    }
    static async single(formId) {
      const singleForm = await this.findAll({ where: { id: formId } });
      return singleForm;
    }

    //this method will search for a form with a particular ID and add an adminId as well as a comment to it,
    static async updateForm(id, status) {
      await this.update(
        { status: status },
        { returning: false, where: { id: id } }
      );
    }
    static async deleteForm(id) {
      await this.destroy({ where: { id: id } });
    }
  }

  return Forms;
};
