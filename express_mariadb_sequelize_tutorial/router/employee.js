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

//get all the employees
router.get('/get_employees', (request, response) => {
    
    Employee.findAll().then( (result) => {
        return response.status(200).send(result);
    }).catch( (error) => {
        return response.status(500).send(error);
    });
});

//get employee by id
router.get('/get_employees/:id', (request, response) => {
    
    Employee.findAll(
        {where : {id : request.params.id}}
    ).then( (result) => {
        return response.status(200).send(result);
    }).catch( (error) => {
        return response.status(500).send(error);
    });
});

router.patch('/update_employee/:id', (request, response) => {
    
    const id = request.params.id;

    Employee.findByPk(id).then( (employee) => {
        if(employee){
            for(let i in request.body){
                employee[i] = request.body;
            }
            employee.save().then( (result) => {
                return response.status(200).send(result);
            })
        } else {
            return response.status(404).send('Employee not found!');
        }
    }).catch( (error) => {
        return response.status(500).send(error);
    });
});

//delete
// use the request router.delete
// employee.destroy()

router.delete('/delete/:id', (request, response) => {
    
    const id = request.params.id;

    Employee.findByPk(id).then( (employee) => {
        if(employee){
            employee.destroy().then( (result) => {
                return response.status(200).send('Employee deleted!!!');
            })
        } else {
            return response.status(404).send('Employee not found!');
        }
    }).catch( (error) => {
        return response.status(500).send(error);
    });
});

module.exports = router;