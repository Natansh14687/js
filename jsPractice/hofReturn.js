function oddEvenFactory(input){
    if(input == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(input == "even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else {
        console.log("Wrong input");
    }
}

let input = "even";