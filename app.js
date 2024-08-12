
const test = document.querySelectorAll("div");

test.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("hi");
  });
});


// Function to add a global event listener that triggers a callback if the event target matches a specific selector
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    // Check if the event target matches the selector
    if (e.target.matches(selector)) {
      // Call the callback function with the event object
      callback(e);
    }
  });
}

// Add a global click event listener for 'div' elements 
// If a 'div' element is clicked, the callback function will log "hi"
addGlobalEventListener("click", "div", (e) => {
  console.log("hi");
});


function printName(firstName, lastName) {
  let result = `${firstName}, ${lastName}`;
  console.log(result);
};


function printNTimes (n, value) {
  for (let i = 0; i < n; i++) {
    console.log(value)
  };
};

document.addEventListener('click', () => {
  console.log("clicked");
});


printNTimes(10, 'ben')