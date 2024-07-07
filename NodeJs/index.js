const express = require('express');
const app = express();

app.use(express.json());

const customers = [
  {id: 1, name: 'Harsh'},
  {id: 2, name: 'Sam'},
  {id: 3, name: 'Gurm'}
]

app.use((req, res, next) => {
  console.log('HG here');
  next();
});

// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// });

app.get('/', (request, response) => {
  response.send('Hello Harsh');
});

app.get('/customers/', (request, response) => {
  if(!customers) response.status(404).send('Customers not found');
  response.send(customers);
});

app.get('/customers/:id', (request, response) => {
  // var customer = customers.find( c => c.id == request.params.id);

  var customer = customers.find( function (c) {
    if(c.id == request.params.id){
      return c;
    }
  });

  if(!customer) response.status(404).send('Customer not found');
  response.send(customer);
});

app.post('/customers', (request, response) => {

  if(!request.body.name){
    response.send('Please enter a valid Name');
    return;
  }


  var customer = {
    id : customers.length + 1,
    name : request.body.name
  }
  customers.push(customer);
  response.send(customers);
});

app.put('/customers/:id', (request, response) => {

  var customer = customers.find( c => c.id == request.params.id);
  if(!customers){
    response.status(404).send('Customers not found');
    return;
  } 

  if(!request.body.name){
    response.send('Please enter a valid Name' + request.body.name);
    return;
  }
  
  customer.name = request.body.name;
  response.send(customer);
});

app.delete('/customers/:id', (request, response) => {

  var customer = customers.find( c => c.id == request.params.id);
  if(!customer){
    return response.status(404).send('Customers not found');    
  }

  var index = customers.indexOf(customer);
  customers.splice(index, 1);
  
  response.send(customers);
});

app.all('*', function(req, res) {
  throw new Error("Bad request")
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});