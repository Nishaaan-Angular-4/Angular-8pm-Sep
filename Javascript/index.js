var studentCount = "21";
var studentName = "kiran";
var iAgree = false;
var studentList = ["lokesh", "haritha", "Yoga", "sunil"];
/*
var person ={};//object.
person.firstName="Kiran";
person.lastName="PATURI";*/

var person = {
    firstName: "",
    lastName: "",
    address: {
        country: {
            code: "IN",
            name: "India"
        }
    }
};

person.firstName = "kiran";
person.lastName = "paturi";
console.log(person.address.country.name);
/*
if (typeof studentName == "string") {
    console.log("Student Name is String Type");
}

if (typeof studentCount == "number") {
    console.log("StudentCount is a number Type");
} else {
    console.log("Student count is not a number");
}

if (typeof studentList == "object") {
    console.log("Student List is Object");
}*/
