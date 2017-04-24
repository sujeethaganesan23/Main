const express = require('express');
const router = express.Router();

const Employee = require('../models/employee');

//AddEmployee to Register
router.post('/register' , (req, res, next)=> {
    let newEmployee = new Employee({
        empid : req.body.empid,
        empname: req.body.empname,
        title: req.body.title,
		position:req.body.position,
		competency:req.body.competency,
        contact:req.body.contact,
		blood:req.body.blood,
		address:req.body.address
    });
    
    Employee.addEmployee(newEmployee, (err, employee)=>
    {
        if(err){
            res.json({success:false, msg:'Failed to register employee'});
        }
        else{
           res.json({success:true, msg:'Employee Registered'}); 
        }
    })
});


//UpdateEmployee in Register
router.put('/table/:_id', (req, res) => {
	var id = req.params._id;
	var emp = req.body;
	Employee.updateEmployee(id, emp, {}, (err, emp) => {
		if(err){
			throw err;
		}
		res.json(emp);
	});
});


//Get Employees
router.get('/table', (req, res, next) => {
	Employee.getEmployee((err, emps) => {
		if(err){
			throw err;
		}
		res.json(emps);
	});
});

//DeleteEmployee from Register
router.delete('/table/:_id', (req, res, next) => {
	var id = req.params._id;
	Employee.removeEmployee(id, (err, emp) => {
		if(err){
			throw err;
		}
		res.json(emp);
	});
});


//Authentication
router.get('/authenticate' , (req, res, next)=> {
    res.send('AUTHENTICATION');
});

module.exports = router;