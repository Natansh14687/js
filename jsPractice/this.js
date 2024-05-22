const info = {
    Name : "Natansh",
    Age : 20,
    english : 99,
    maths : 98,
    science : 100,
    getAvg(){
        let avg = ((this.english+this.maths+this.science)/3);
        console.log(`${this.Name} has got avg ${avg} marks`);
    }
}

// ------------------------------- this in function means object is window -----------------------------

function stack(){
    console.log(this);
}