![Node.js CI](https://github.com/JorgeAcostaDLP/finalProjectInclusion/workflows/Node.js%20CI/badge.svg)
<<<<<<< HEAD

# Simple Node Boilerplate
=======
>>>>>>> 3476d552e62c085772883c6adcf80bff23ad4468

# Apply by Inclusion
Deployed at https://applybyinclusion2020.herokuapp.com/

<<<<<<< HEAD
## Database Setup

This project uses Sequelize as an ORM. It was set up using the directions here: <https://sequelize.org/master/manual/migrations.html>. The easiest way to work with this set up is to use the generator that comes with `sequelize-cli`: <https://github.com/sequelize/cli#usage>.

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define(
    'Reservation',
    {
      name: DataTypes.STRING,
      slot: DataTypes.DATE
    },
    {}
  );

  class Reservation extends SequelizeReservation {
    static async all() {
      return await this.findAll();
    }
  }

  return Reservation;
};
```
=======
## Introduction
>>>>>>> 3476d552e62c085772883c6adcf80bff23ad4468

Welcome to the applicant portal of the future.

Form Submission:
- Form publically available for any prospective applicants to fill out, URL unique to the form.

Applicant Management:
- Admins can view and manage the applicants associated with a form.
- Admins can leave comments. Each comment is associated with an admin who wrote it.
- An applicant is marked as NEW if no admin has started reviewing their application.
- An admin can mark an application as UNDER_REVIEW, REJECTED, or ACCEPTED.
- An admin can create a login for another admin.

<<<<<<< HEAD
For an application of this complexity ensuring that database operations through models work well is important. Models are mostly your own code.
=======
## Getting Started

  - `npm install`
  - `npm seedTestData`
  - `npm start`
  - `npm test`
>>>>>>> 3476d552e62c085772883c6adcf80bff23ad4468
