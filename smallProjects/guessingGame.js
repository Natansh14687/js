let max = prompt("Enter the number");
let s4 = Math.floor(Math.random() * max) + 1;
let guess = prompt(`Guess the number b/w 1 to ${max}`);
while(true){
    if(s4 == guess){
        console.log(`You have quit the game, your number was ${s4}`);
        break;
    }
    else if(guess == "quit"){
        console.log("You have quit the game");
        break;
    }
    else if(s4 > guess){
        guess = prompt("Your guess is too small, guess greater then this number");
    }
    else{
        guess = prompt("your guess is big, guess smaller then this number");
    }
}