const winArr = ["Natansh", "Dushyant", "Rohit", "Hemant", "Navneet", "Prakhar"];
let [winner, firstRunner, secondRunner, ...others] = winArr;

console.log(winner);
console.log(firstRunner);
console.log(others);


// --------------------------------------- destructuring objects --------------------------------------

const info = {
    name : "Natansh",
    age : 20,
    city : "sirsa",
    state : "Haryana",
    gender : "male",
    rollNo : 75,
}

let {city : stay, rollNo : enrollmentId = 2301010075, gender, name} = info;
console.log(stay);
console.log(enrollmentId);
console.log(name);
console.log(gender);