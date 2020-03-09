'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.bulkInsert('Admins', [
        {
          userName: 'John Cena',
          userPassword: 'JohnCena',
          createdAt: new Date()
        },
        {
          userName: 'Not John Cena',
          userPassword: 'NotCena',
          createdAt: new Date()
        }
      ]),
      queryInterface.bulkInsert('Forms', [
        {
          textInput: 'Name',
          textArea: 'Description',
          checkBox: true,
          createdAt: new Date(),
          date: new Date()
        },
        {
          textInput: 'Name1',
          textArea: 'Description1',
          checkBox: true,
          createdAt: new Date(),
          date: new Date()
        }
      ])
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.bulkDelete('Admins', null, {}),
      queryInterface.bulkDelete('Forms')
    );
  }
};
