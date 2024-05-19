// console.log("Hii, I'm Natansh");
// console.log("This is my first time from VsCode to Console");
// let trafficLight = "yellow";
// if(trafficLight == "red"){
//     console.log("Stop");
// }
// if(trafficLight == "yellow"){
//     console.log("Drive Slow");
// }
// if(trafficLight == "green"){
//     console.log("Go");
// }

// Popcorn prectice que
// let size = "M";
// if (size == "XL") console.log("price is Rs. 250");
// else if(size == "L") console.log("price is Rs. 200");
// else if(size == "M") console.log("Price is Rs. 100");
// else if(size == "S") console.log("Price is Rs. 50");
// else console.log("Not Available");

// let str = "aman";
// if(str.length > 3 && str[0] == "a"){
//     console.log("good string")
// }
// else console.log("not a good string")

// let day = 5;
// switch(day){
//     case 1 :
//         console.log("Monday");
//         break;
//     case 2 :
//         console.log("Tuesday");
//         break;
//     case 3 :
//         console.log("Wednesday");
//         break;
//     case 4 :
//         console.log("Thursday");
//         break;
//     case 5 :
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday")
//         break;
//     case 7 :
//         console.log("Sunday");
//         break;
//     default :
//         console.log("Wrong Day");
// }

// let msg = "help!";
// console.log(msg.trim().toUpperCase())

// let name1 = "ApnaCollege";
// console.log(name1.replace("Apna","").replace("l","t"));

// let name = prompt("Please enter your name here");
// let age = prompt("Please enter your age");
// let user1 = alert(`${name} is ${age} years old.`);

// let quat = 3;
// switch(quat){
//     case 1 :
//         console.log("Jaunuary, February, March");
//         break;
//     case 2 :
//         console.log("April, May, June");
//         break;
//     case 3 :
//         console.log("july, August, September");
//         break;
//     case 4 :
//         console.log("Oct, Nov, Dec");
//         break;
//     default :
//         console.log("No quarter found");
// }

// let str = "Amanuu";
// if(str[0] == "a" || str[0]=="A" && str.length>5) console.log("Golden String");
// else console.log("not a golden string");

// a = 3;
// b = 10;
// c = 8;
// if(a>b && a>c) console.log("a is greater");
// else if(b>a && b>c) console.log("b is greatest");
// else console.log("c is greatest");

// let a = 5655652;
// let b = 6556572;
// if(a%10 == b%10) console.log("yeh baby");
// else console.log("nahhh baby");

// let n = 2;
// let array = [7,9,0,-2,4];
// let ans = array.slice(0,n);
// console.log(ans);
// console.log(array.slice((array.length-n)));

let n=[[[0,9,8],2,3],[[8,7,6],5,6],[[5,4,3],8,9]];
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        for(let k=0; k<3; k++){
            console.log(n[i][j][k])
            if(n[i][j][k]==9) break;
        }
    }
}
