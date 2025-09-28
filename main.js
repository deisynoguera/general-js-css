import { logMediaQuery } from "./utils.js";

let card1 = document.getElementById("card1");
card1.addEventListener("click", () => {
  console.log("click en card1");
});

const screenWidth = screen.width;
console.log(`Total screen width: ${screenWidth}px`);

logMediaQuery();
window.addEventListener("resize", logMediaQuery);
