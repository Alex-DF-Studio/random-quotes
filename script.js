import quotes from './quotes.js'
const favorite = []
let currentIndex = null
const quoteElement = document.getElementById('quote')
const generateBtn = document.getElementById('generate-btn')
const quoteAuthor = document.getElementById('quote-author')
const toggleFavorite = document.getElementById('toggle-favorite-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  currentIndex = randomIndex
  const randomQuote = quotes[randomIndex]
  quoteAuthor.textContent = randomQuote.author
  quoteElement.textContent = randomQuote.quote
  console.log(randomIndex)
  return randomIndex
}

function addFavorite() {
  if (currentIndex === null) {
    console.log('currentIndex null')
    return
  }
  const currentQuote = quotes[currentIndex].id
  if (!favorite.includes(currentQuote)) {
    favorite.push(currentQuote)
  }
  console.log(favorite)
}

generateBtn.addEventListener('click', generateRandomQuote)
toggleFavorite.addEventListener('click', addFavorite)
