// function sum(...arr){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// sum(1,2,3,4,5,6);

function min(){
    console.log(arguments.length);
}

min(1,2,3,4,5,6)


// --------------------------------------- argument and rest -------------------------------------

function sum(...args){
    return args.reduce((sum, ele) => sum+ele);
};

console.log(sum(1,2,3,4,5));

function min(...arg){
    return arg.reduce((m,ele) => {
            if(m<ele) return m;
            else return ele;
    })
};

console.log(min(2,3,4,5,1,8,965,78));
