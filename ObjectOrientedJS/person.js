//functions are also objects.
var Person = function () {
    var panNumber = ""; //private property.
    this.firstName = ""; //public property.
    this.lastName = ""; //public property.
    //this.gender="";
}

var student1 = new Person();

student1.firstName = "kiran";
student1.lastName = "PVS";

var student2 = new Person();
student2.firstName = "Yoga";
student2.lastName = "B";

Person.prototype.gender = "";
console.log(student1);
console.log(student2);
