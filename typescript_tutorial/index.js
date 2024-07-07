var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var age = 20;
var course = "Test";
var is_true = true;
var test = [1, true, "test"];
//tuples
var user = [1, "Harsh"];
//function example
function salary(age, salary, name) {
    return name + " is " + age + " year old and his salary is " + salary;
}
var person = salary(10, 1000, 'Harsh');
console.log(person);
var employee = { id: 1, name: "Harsh" };
var student = { id: 1, name: "Harsh" };
var per = { id: 1, name: "Test" };
function getAge(age) {
    console.log(age);
}
getAge(20);
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var pers = new Person('Harsh', 'Gurm');
var Male = /** @class */ (function (_super) {
    __extends(Male, _super);
    function Male(firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = age;
        return _this;
    }
    return Male;
}(Person));
var ma = new Male('Test', 'Hello', 20);
console.log(ma);
