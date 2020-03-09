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

    //this is the method used to create newAdmins
    static async newAdmin(userName, userPassword) {
      const newAdmin = await this.create({
        userName: userName,
        userPassword: userPassword
      });
      return newAdmin;
    }
  }

  return Admins;
};
