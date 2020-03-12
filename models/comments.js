'use strict';
// import Admins from './admins';
// import Forms from './forms';

module.exports = (sequelize, DataTypes) => {
  const SequelizeComments = sequelize.define(
    'Comments',
    {
      adminKey: DataTypes.INTEGER,
      formKey: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
    },
    {}
  );

  class Comments extends SequelizeComments {
    static async all() {
      return await this.findAll();
    }

    static async singleForm(formId) {
      return await this.findAll({ where: { formId: formId } });
    }

    static async newComment(adminId, formId, comment) {
      return await this.create({
        adminKey: adminId,
        formKey: formId,
        comment: comment,
        createdAt: new Date(),
      });
    }
  }

  //   Admins.hasMany(Comments);
  //   Forms.hasMany(Comments);
  //   Comments.belongsTo(Admins);
  //   Comments.belongsTo(Forms);
  return Comments;
};
