interface Person {
    firstName: string;
    lastName: string;
  }
   

class PersonClass implements Person{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(firstName:string , lastName:string) : string {
        return firstName + " " + lastName;
    }
}

// const per = new PersonClass("Harsh", "Gurm");
// const jair = new PersonClass("Jair", "Test");
// console.log(per);
// console.log(jair);

// class Man extends PersonClass {
// 	age:number;
	
// 	constructor(firstName: string, lastName: string, age: number){
// 		super(firstName, lastName);
// 		this.age = age;
// 	}
// }

// var newMan:Man = new Man('Harsh', 'Gurm', 28);
// console.log(newMan);