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
        status: {
          allowNull: true,
          defaultValue: 'New',
          type: Sequelize.STRING
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
          allowNull: false,
          type: Sequelize.DATE
        },
        Date: {
          allowNull: false,
          type: Sequelize.DATE
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
      }),
      queryInterface.createTable('Comments', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        adminKey: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        formKey: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE
        },
        comment: {
          allowNull: true,
          type: Sequelize.TEXT
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
      queryInterface.dropTable('Forms'),
      queryInterface.dropTable('Admins'),
      queryInterface.dropTable('Comments')
    );
  }
};
