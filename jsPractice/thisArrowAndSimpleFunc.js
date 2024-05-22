const student = {
    Name : "Natansh",
    Age : "20",
    maths : 78,
    english : 89,
    hindi : 90,
    hello : "hii",
    arrow : () => {
        console.log(this);
    },
    simple(){
        console.log(this);
    },

    getArrow : function () {
        setTimeout(() => {
            console.log(this);
        },2000)
    },

    getSimle : function () {
        setTimeout(function () {
            console.log(this);
        },2000)
    },
}