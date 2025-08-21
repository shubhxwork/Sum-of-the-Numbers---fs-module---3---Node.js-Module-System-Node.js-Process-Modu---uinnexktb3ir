// src/index.js
const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "input.txt");
const outputPath = path.join(__dirname, "output.txt");

// Step 1: Read the contents of input.txt
fs.readFile(inputPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading input.txt:", err);
    return;
  }

  // Step 2: Split into lines and extract numbers
  const lines = data.trim().split("\n");
  let total = 0;

  lines.forEach(line => {
    const parts = line.trim().split(" ");
    const number = parseInt(parts[1], 10); // second item is the number
    total += number;
  });

  // Step 3: Write result into output.txt
  fs.writeFile(outputPath, total.toString(), (err) => {
    if (err) {
      console.error("Error writing output.txt:", err);
      return;
    }
    console.log("Sum written to output.txt successfully!");
  });
});
