const info = [
    {
        Name : "Natansh",
        Age : 20,
        Gender : "male",
    },

    {
        Name : "Dushyant",
        Age : 19,
        Gender : "male",
    },

    {
        Name : "Rohit",
        Age : 19,
        Gender : "male",
    },

    {
        Name : "Hemant",
        Age : 20,
        Gender : "male",
    },
];

console.log(info);
console.log()
console.log(info[1]);

info[1].city = "sirsa";

console.log(info);


info[info.length] = {
    Name : "Aman",
    Age : 19,
    Gender : "male",
}
console.log();
console.log(info);