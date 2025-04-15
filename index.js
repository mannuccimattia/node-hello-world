// console.log("Hello World")

// const x = process.argv[2] ? process.argv[2] : "";
// const y = process.argv[3] ? process.argv[3] : "";

// console.log(`${x} ${y}`);
console.log(process.argv)
let output = [];
for(let i =2; i< process.argv.length; i++){
if(process.argv[i] !== undefined){
  output.push(process.argv[i]);
};
};
console.log(output.join(" "));