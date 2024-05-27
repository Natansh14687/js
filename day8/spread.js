const arr = [1,2,3,4,5,6,7,8,9];
console.log(...arr);

// const object =  {
//     name : "Natansh",
//     age : 20,
//     rollNo : 75,
//     backlogs : 30,
// };

// console.log(...object);

const name = "Natansh";
console.log(...name);

// ------------------------------------------- Spread with array literls --------------------------------------

const arr1 = [2,4,6,7,5,4];
const newArr = arr1;
newArr.push(10);
console.log(newArr); // value is pushed in both the arrays copied array and original array also  
console.log(arr1);

const newArr1 = [...arr1]; // values of original array are only copied in newArr1 array
newArr1.push(12);
console.log(newArr1); 
console.log(arr1);

let branch = [..."Computer Science"];
console.log(branch);


const oddArr = [1,3,5,7,9];
const evenArr = [2,4,6,8];
console.log([...oddArr, ...evenArr]);

// ---------------------------------------------- object literals ------------------------------------------

const intro = {
    name : "Natansh",
    age : 20,
    city : "sirsa",
    state : "haryana",
};

const introCopy = {...intro, rollNo : 75, gender : "male"};
console.log(introCopy);
// console.log(...intro);  --> error

const oddObj = {...oddArr};
console.log(oddObj);

let name0 = "Natansh";
console.log({...name0});
