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
          textInput: 'Svetlana',
          textArea: 'Svetalana is the best',
          checkBox: true,
          createdAt: new Date(),
          date: new Date()
        },
        {
          textInput: 'Jorge',
          textArea: 'Jorge is the best',
          checkBox: true,
          createdAt: new Date(),
          date: new Date()
        },
        {
          textInput: 'Joe',
          textArea: 'Joe is the best',
          checkBox: true,
          createdAt: new Date(),
          date: new Date()
        }
      ]),
      queryInterface.bulkInsert('Comments', [
        {
          adminKey: 1,
          formKey: 3,
          adminName: 'John Cena',
          comment: 'This is a test comment',
          createdAt: new Date()
        }
      ])
    );
  },

  down: (queryInterface, Sequelize) => {
    return (
      queryInterface.bulkDelete('Admins', null, {}),
      queryInterface.bulkDelete('Forms'),
      queryInterface.bulkDelete('Comments')
    );
  }
};
