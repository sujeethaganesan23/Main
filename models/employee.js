const mongoose = require('mongoose');
const config = require('../config/database');

//Employee Schema 
const EmployeeSchema= mongoose.Schema({
    empid:{
        type:Number,
        required:true
    },
    empname: {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true  
    },
    competency:{
        type:String,
        required:true  
    },
    contact:{
        type:Number
    },
    blood:{
        type:String
    },
    address:{
        type:String
    }
},
{
    versionKey: false
});

const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);

//Get Employees
module.exports.getEmployee= (callback, limit) => {
    Employee.find(callback).limit(limit);
}

//Add Employees
module.exports.addEmployee = (newEmployee,callback) => {
  Employee.create(newEmployee, callback);  
}

//Update Employees
module.exports.updateEmployee = (id, newEmployee, options, callback) => {
    var query = {_id: id};
    var update = {
        empid : newEmployee.empid,
        empname: newEmployee.empname,
        title: newEmployee.title,
		position:newEmployee.position,
		competency:newEmployee.competency,
        contact:newEmployee.contact,
		blood:newEmployee.blood,
		address:newEmployee.address
    }
    Employee.findOneAndUpdate(query, update, options, callback);
}

//Delete Employees
module.exports.removeEmployee = (id, callback) => {
    var query = {_id: id};
    Employee.remove(query, callback);
}