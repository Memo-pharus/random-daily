// Array of strings to randomize
const strings = ["Dani", "Ram", "Stamm"];

// Function to randomize and return strings
function randomizeStrings() {
  return strings.sort(() => Math.random() - 0.5).join(" -> ");
}

// Display the result
document.getElementById("output").textContent = randomizeStrings();
