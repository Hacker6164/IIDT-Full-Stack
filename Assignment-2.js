function generateRandomColor() {
    const randomHex = Math.floor(Math.random() * 16777215);
    const hexColor = "#" + randomHex.toString(16).padStart(6, '0');
    return hexColor;
  }
  
  // Ensure elements are available before accessing them:
  document.addEventListener("DOMContentLoaded", function() {
    let bdy = document.body;
    let btn = document.getElementById("Button");
  
    btn.addEventListener("click", () => {
      const randomColor = generateRandomColor(); // Generate new color on each click
      bdy.style.backgroundColor = randomColor;
    });
  });
  
// Code for automatically changing the BGC of the web page
// function generateRandomColor() {
//   const randomHex = Math.floor(Math.random() * 16777215);
//   const hexColor = "#" + randomHex.toString(16).padStart(6, '0');
//   return hexColor;
// }

// // Ensure elements are available before accessing them:
// document.addEventListener("DOMContentLoaded", function() {
//   let bdy = document.body;

//   // Call the function automatically every 2 seconds
//   setInterval(() => {
//     const randomColor = generateRandomColor();
//     bdy.style.backgroundColor = randomColor;
//   }, 200);
// });
