let age:number = 20;
let course:string = "Test";
let is_true:boolean = true;

let test: any[] = [1, true,"test"];

//tuples
let user: [number, string] = [1, "Harsh"];

//function example
function salary(age: number, salary: number, name: string) : string {
    return name + " is " + age + " year old and his salary is " +  salary;
}

var person = salary(10, 1000, 'Harsh');
console.log(person);

// let employee: {
//     id: number,
//     name: string
// } = {id : 1, name: "Harsh"};

type Student = {
    id: number,
    name: string
}

let employee: Student = {id : 1, name: "Harsh"};
let student: Student = {id : 1, name: "Harsh"};
let per: Student = {id : 1, name: "Test"};

function getAge(age: number | string){
    console.log(age);
}

getAge(20);

class Person {
    //constructor
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

}

var pers: Person = new Person('Harsh', 'Gurm');


class Male extends Person {
    age: number;

    constructor(firstName:string, lastName:string, age:number){
        super(firstName,lastName);
        this.age = age;        
    }

}


var ma: Male = new Male('Test', 'Hello', 20);
console.log(ma);