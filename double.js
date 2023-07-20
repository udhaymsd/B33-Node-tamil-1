console.log(process.argv);

const double = (n) => n*2 ;

// node double.js 500

console.log("The double is:" ,double(process.argv[2]));

const [, , num] = process.argv;

console.log("The double is:" ,double(num));