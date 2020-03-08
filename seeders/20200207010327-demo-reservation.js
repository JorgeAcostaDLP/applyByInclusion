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
          textInput: 'Name',
          textArea: 'Description',
          checkBox: true,
          date: new Date()
        },
        {
          textInput: 'Name1',
          textArea: 'Description1',
          checkBox: true,
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
