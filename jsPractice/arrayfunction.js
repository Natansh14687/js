function concat(arr){
    let string="";
    for(let i=0; i<arr.length; i++){
        string = string + arr[i];
    }
    return string;
}

arr1 = ["Natansh ","is ","a ","bad ","boy "];
console.log(concat(arr1));