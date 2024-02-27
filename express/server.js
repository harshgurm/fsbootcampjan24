const express = require('express');
const app = express();

const customers = [
    {id: 1, name: "Harsh"},
    {id: 2, name: "Test"},
    {id: 3, name: "Sam"},
];

app.get('/', (request, response) => {
    response.send('The is another message');
});

app.get('/customers', (request, response) => {

    if(!customers) response.status(404).send('Customer not found');
    response.send(customers);
});

app.get('/customers/:id', (request, response) => {

    // try to find the customer using find function
    var customer = customers.find(x => x.id == request.params.id);        
    if(!customer) response.status(404).send('Customer not found');    
    response.send(customer);
});

app.listen(3000, () => {
    console.log('Application is running');
})