const quoteDiv = document.getElementById("quoteDiv");
const btn = document.getElementById("btn");

btn.addEventListener("click", generateQuote);

generateQuote();

async function generateQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();

  quoteDiv.innerHTML = data.content;
}

// Using fetchAPI

// function generateQuote() {
//   fetch("https://api.quotable.io/random")
//   .then((res) => res.json())
//   .then((data) => {
//     quoteDiv.innerHTML = data.content;
//   })
// }
