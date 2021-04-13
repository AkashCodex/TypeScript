"use strict";
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
exports.__esModule = true;
//clases and Access Specifiers
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.sayhello = function () {
        console.log("Hello " + this.name);
    };
    return Student;
}());
var obj1 = new Student("Akash");
obj1.sayhello();
var obj2 = new Student("Sanjay");
obj2.sayhello();
//Inheritance+Access specifiers+OOPS ocnepts all are same in TS just as in another languages
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Teacher;
}(Student));
var obj3 = new Teacher("fsf");
obj3.sayhello();
