const arr = [10,20,30,40,50];
let multiple_10 = arr.every((ele) => {
    return (ele % 10 == 0);
})

console.log(multiple_10);

const arr1 = [10,20,5,30];
let notSum = arr1.every((ele) => {
    return (ele % 10 == 0);
})
console.log(notSum);

let min = arr1.reduce((minNum, ele) => {
    if(minNum < ele) return minNum;
    else return ele;
})

console.log(min);