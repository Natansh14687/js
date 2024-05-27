arr = [1,2,3,4,5,6];

evenArr = arr.every((ele) => {
    return ele % 2 == 0;
});

console.log(evenArr);

const arr_Even = [2,4,6,8];

let yes_arr = arr_Even.every((ele) => {
    return ele % 2 == 0;
});

console.log(yes_arr);

let some_arr = arr.some((ele) => (ele % 2 == 0));
console.log(some_arr);