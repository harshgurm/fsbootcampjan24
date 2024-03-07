const Employee = require('../models/employee');
const router = require('express').Router();

router.post('/add_employee', (request, response) => {
    // const  name = request.body.name;
    const { name, salary, department_id } = request.body;
    Employee.create({
        Name: name,
        Salary: salary,
        departmentID: department_id,
    }).then( (result) => {
        return response.status(200).send(result);
    }).catch( (error) => {
        return response.status(500).send(error);
    });
});

router.get('/get_employees', (request, response) => {
    
    Employee.findAll().then( (result) => {
        return response.status(200).send(result);
    }).catch( (error) => {
        return response.status(500).send(error);
    });
});

module.exports = router;