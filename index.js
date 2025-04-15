let output = [];

for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] !== undefined) {
    output.push(process.argv[i]);
  };
};

console.log(output.join(" "));