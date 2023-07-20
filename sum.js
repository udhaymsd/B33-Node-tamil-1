const add = (a,b) => a + b ;



// console.log(process.argv);

const [ , , n1,n2 ] = process.argv;

console.log("The sum is:" ,add(+n1, +n2));  // insted of parseInt, we use + here before (n1), (n2)node sum.js 200 700