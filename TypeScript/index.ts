let age: number = 28;

if(age > 30)
    age+= 10;
else 
    age-= 5;

let sales: number = 1000;
let course: string = 'TypeScript';
let is_published = true;
let level;


function hello (test : string){
    console.log(test);
    return test;
}

let test: number[] = [1,2];

let user: [number, string] = [1,"Harsh"];

const enum Size { Small = 1, Medium, Large };
let mySize

// number in this example is setting what it the function return type would be
function return_example (test : string) : number{
    console.log(test);
    return 0;
}

function age_salary (age : number, salary: number, taxYear?: number) : number{
    
    return age * salary;
}

age_salary(10, 2000);


let employee: {
    id: number,
    name: string
} = {id: 1, name: "Harsh"}

let students: {
    id: number,
    name?: string
} = {id: 1}


type Student = {
    id: number,
    name?: string
}

let student: Student = {id: 1}
let employee_test : Student = {id: 1}

function he(val : number | string) : number | string {
    
  return val;
}


