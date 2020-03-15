const Sequelize = require('sequelize');
require('dotenv').config()
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Employee = connection.define('employee', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salary: {
      type: Sequelize.STRING,
      allowNull: false
  },
}, {
        timestamps: false,
    });

module.exports ={
  Employee
}