const  stdArr = [{
    Name : "Natansh",
    marks : 98,
},{
    Name : "Dushyant",
    marks : 97,
},{
    Name : "Rohit",
    marks : 95,
},{
    Name : "Hemant",
    marks : 94,
}];

const cgpa = stdArr.map((n) => { return n.marks / 10});
console.log(cgpa);

const A = stdArr.filter((ele) => {return ele.marks > 95;});
console.log(A);
