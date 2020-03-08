'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeAdmins = sequelize.define(
    'Admins',
    {
      userName: DataTypes.STRING,
      userPassword: DataTypes.STRING,
      createdAt: DataTypes.DATE
    },
    {}
  );

  class Admins extends SequelizeAdmins {
    static async all() {
      return await this.findAll();
    }
  }

  return Admins;
};
