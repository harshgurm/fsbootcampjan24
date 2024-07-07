const Employee = require('../models/employee');
const router = require('express').Router();

router.post('/add_employee', (request,response) => {
    const name = request.body.name;
    const salary = request.body.salary;
    const departmentID = request.body.departmentID;

    Employee.create(
        {name: name, departmentID: departmentID, salary: salary}).then((result)=>{
         return response.status(200).send(result);})
         .catch((err)=>{return response.status(500).send(err);});
});

router.get('/employees', (request, response) => {
    Employee.findAll().then((result) => {
        return response.status(200).send(result);
    }).catch((error) => {
        return response.status(200).send(error); 
    })
})

router.get('/employees/:id', (request, response) => {
    Employee.findAll({where: {id: request.params.id}}).then((result) => {
        return response.status(200).send(result);
    }).catch((error) => {
        return response.status(200).send(error); 
    })
})

router.patch('/update_employees/:id', (request, response) => {
    Employee.findByPk(parseInt(request.params.id)).then((employee) => {
        if(employee){
            for(let i in request.body){
                employee[i] = request.body[i];
            }
            employee.save().then((result) => {
                response.status(200).send(result);
            })
        } else {
            return response.status(404).send('Employee not found');
        }
        // return response.status(200).send(result);
    }).catch((error) => {
        return response.status(500).send(error); 
    })
})


router.delete('/delete_employees/:id', (request, response) => {
    Employee.findByPk(parseInt(request.params.id)).then((employee) => {
        if(employee){
            employee.destroy().then((result) => {
                response.status(200).send(result.affectedRows);
                // return response.status(200).send(result);
            })
        } else {
            return response.status(404).send('Employee not found');
        }
    }).catch((error) => {
        return response.status(500).send(error); 
    })
})

module.exports = router;