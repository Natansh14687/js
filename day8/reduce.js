arr = [1,2,3,4,5];
let sum = arr.reduce((res, ele) => {
    console.log(res);
    return ele + res;
});
console.log(sum);

// --------------------------------- max in array --------------------------------

const arr1 = [4,8,6,76,89,43,56];
let max = arr1.reduce((maxi,ele) => {
    if(ele>maxi) return ele;
    else return maxi;
})

console.log(max);