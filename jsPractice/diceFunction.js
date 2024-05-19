function dice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

dice();

function average(num1, num2, num3){
    console.log((num1+num2+num3)/3);
}

average(2,3,5);