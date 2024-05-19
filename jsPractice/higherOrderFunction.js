function greet(){
    console.log("Namaste");
}
function greetLoop(func, count){
    for(let i=0; i<count; i++){
        func();
    }
}

greetLoop(greet, 100);