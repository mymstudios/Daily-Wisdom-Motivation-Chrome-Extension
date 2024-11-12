document.addEventListener('DOMContentLoaded', function() {
  generateQuote();
  document.getElementById('newQuote').addEventListener('click', generateQuote);
});

function generateQuote() {
  const types = Object.keys(quotes);
  const randomType = types[Math.floor(Math.random() * types.length)];
  const typeQuotes = quotes[randomType];
  const randomQuote = typeQuotes[Math.floor(Math.random() * typeQuotes.length)];
  
  document.getElementById('quote').textContent = randomQuote;
  document.getElementById('quote-type').textContent = 
    `Type: ${randomType.charAt(0).toUpperCase() + randomType.slice(1)}`;
}