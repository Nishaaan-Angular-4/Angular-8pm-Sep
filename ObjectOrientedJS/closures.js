//outerfunction
function getTicket(source, desitnation) {
    var discount;

    //inner function
    return function printTicket(mode) {
        console.log("Dear Customer, your ticket is confirmed");
        console.log("From :" + source);
        console.log("To:" + desitnation);
        console.log("mode  is:" + mode);
    }
}

/*
var flightTicket = getTicket("hyd", "texas");
var trainTicket = getTicket("hyd", "vij");
trainTicket("train");
flightTicket("Flight");
var b = 10;
var a = b;
*/

var cruise = getTicket("Lasvegas", "Newyork");

var ticket = new cruise();

console.log(ticket);
