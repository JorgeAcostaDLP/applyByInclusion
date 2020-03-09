'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return (
      queryInterface.bulkInsert('Admins', [
        {
          userName: 'John Cena',
          userPassword: 'JohnCena'
        },
        {
          userName: 'Not John Cena',
          userPassword: 'NotCena'
        }
      ]),
      queryInterface.bulkInsert('Forms', [
        {
          textInput: 'Name1',
          textArea: 'Description1',
          checkBox: true,
          createdAt: new Date(),
          date: new Date()
        },
        {
          textInput: 'Name2',
          textArea: 'Description2',
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
