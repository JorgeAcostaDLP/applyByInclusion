'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.createTable('Forms', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        textInput: {
          type: Sequelize.STRING
        },
        textArea: {
          type: Sequelize.TEXT
        },
        checkBox: {
          allowNull: false,
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE
        },
        Date: {
          allowNull: false,
          type: Sequelize.DATE
        },
        adminId: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        Comment: {
          allowNull: true,
          type: Sequelize.TEXT
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE
        }
      }),
      queryInterface.createTable('Admins', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE
        },
        userName: {
          type: Sequelize.STRING
        },
        userPassword: {
          type: Sequelize.STRING
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE
        }
      })
    );
  },
  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.dropTable('Forms'), queryInterface.dropTable('Admins')
    );
  }
};
