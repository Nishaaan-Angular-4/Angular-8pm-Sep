var profiles = [{
        name: "Kareena",
        age: 26,
        profession: "Model",
        gender: "F"
    },
    {
        name: "joy",
        age: 24,
        profession: "Teacher",
        gender: "F"
    },
    {
        name: "John",
        age: 28,
        profession: "Teacher",
        gender: "M"
    },
    {
        name: "Rakesh",
        age: 30,
        professional: "Teacher",
        gender: "M"
    }];



for (var i = 0; i < profiles.length; i++) {

    //console.log(profiles[i]);
    if (profiles[i].gender == "F" && profiles[i].profession == "Teacher" && profiles[i].age < 30) {
        console.log(profiles[i])
    }

}
