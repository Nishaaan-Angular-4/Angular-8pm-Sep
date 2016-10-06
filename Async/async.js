function getTickets(data) {
    if (data == "Dhoni") {
        console.log("tickets over");
    }
    if (data == "Bahubali2") {
        console.log("Ask Rajamouli");
    } else {
        console.log("You got it");
    }
}
/*
setTimeout(function () {
    getTickets("Bahubali2")
}, 5000);

getTickets("Dhoni");
getTickets("Pink")*/;

var addBtton=document.getElementById("btnAdd");
addBtton.addEventListener("click",getTickets);