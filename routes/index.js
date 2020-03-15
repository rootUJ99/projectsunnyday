const express = require('express');
const Sequelize = require('sequelize');
const {Employee} = require('../models');
const router = express.Router();
const Op = Sequelize.Op;
/* GET home page. */

router.post('/create', async (req, res) => {
  const {email, name, salary} = req.body;
  try {
    if (name && email && salary) {
      const emp =  await Employee.create({
        name,
        email,
        salary: Number(salary),
      });
      return res.status(200).send({
        status: 'success',
        data: emp.dataValues
      });
    }
  } catch(err) {
    console.log(err);
    return res.status(400).send(err)
  }
});


router.post('/filter', async (req, res) => {
  const {salary, operator} = req.body;
  try {
    if (salary && operator) {
      const emp = await Employee.findAll({
        where : {
          salary: {
            [Op[operator]]: Number(salary),
          }
        }
      });
      return res.status(200).send({
        status: 'success',
        data: emp
      })
    }
  } catch (err){
    console.log(err);
    return res.status(400).send(err);
  }
  res.send(req.body);
});

module.exports = router;
