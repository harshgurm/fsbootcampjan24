const Department = require('../models/department');
const router = require('express').Router();

router.post('/add_department', (request, response) => {
    Department.create({
        DepartmentName: request.body.department_name
    }).then( (result) => {
        return response.status(200).send(result);
    }).catch( (error) => {
        return response.status(500).send(error);
    });
});

module.exports = router;