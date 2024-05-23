const sq = n => {
    console.log(n*n);
}

sq(2);



const id = setInterval(() => {
    console.log("Hello World");
},2000)

setTimeout(() => {
    clearInterval(id);
    console.log("The interval has been ended");
},10000);