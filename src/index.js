const fs = require("fs");
const path = require("path");

// file paths
const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

try {

  const data = fs.readFileSync(inputPath, "utf-8");


  const lines = data.trim().split("\n");
  let sum = 0;

  lines.forEach(line => {
    const parts = line.trim().split(" ");
    const number = parseFloat(parts[1]); // extract number after word
    sum += number;
  });

  fs.writeFileSync(outputPath, String(sum), "utf-8");
} catch (err) {
  console.error("Error:", err.message);
}
