var PersonClass = /** @class */ (function () {
    function PersonClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonClass.prototype.fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    return PersonClass;
}());
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
