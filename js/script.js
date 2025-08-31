// console.log('script js connected');
// step 4 - making the array of object which consist of quote and author
const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  }
];


// step 1
document.getElementById("quote-generator-btn").addEventListener("click", function(){
    // console.log('click working');

    // step 2 - Catching Paragraph
    const quotePara = document.getElementById("quote-para");

    // step 3 - Catching the author
    const authorName = document.getElementById("author-name");
    console.log(quotePara, authorName);

    // step 5 - making random index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(quotes[randomIndex]);

    quotePara.innerText = quotes[randomIndex].quote;
    authorName.innerText = quotes[randomIndex].author;
});