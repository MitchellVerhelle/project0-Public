/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/

/* Zach helped me add a landing page */


/*** 
  7 quotes array
  timierID defined here
***/

var timerId = setInterval(() => printQuote(), 10000);

let quotes = //7 quotes with category, quotation, source, year, citation, and image (URL)
[
  {
    category: "2016-2020 Spelling Bee",
    quote: "Let's, get, a-little-bit rOwdY! R O UU, D-Y",
    source: "CSN Cheer/Spelling Bee",
    year: "2016-2020",
    cite: "CSN Cheer Coach/Captains",
    image: "Spelling Bee.png"
  },
  {
    category: "Easter Egg",
    quote: "Prepare for trouble! And make it double! To protect the world from devastation! To unite all peoples within our nation! To denounce the evils of truth and love! To extend our reach to the stars above! Jessie! James! Team Rocket blasts off at the speed of light! Surrender now, or prepare to fight! Meowth! That's right!",
    source: "Pokemon",
    year: "2000",
    cite: "genius",
    image: "TeamRocket.png"
  },
  {
    category: "Inspire",
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    year: "2016",
    cite: "Twitter",
    image: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.png"
  },
  {
    category: "Humor",
    quote: "Veganism is the sad result of a morally corrupt mind. Reconsider your life.",
    source: "Ron Swanson",
    year: "2014",
    cite: "Parks and Recreations",
    image: "Veganism is the sad result fo a morally corrupt miind Reconsider your life.png"
  },
  {
    category: "Humor",
    quote: "Leave the gun. Take the cannoli.",
    source: "The Godfather",
    year: "1972",
    cite: "independent",
    image: "Leave the Gun Take the Cannoli.png"
  },
  {
    category: "Humor",
    quote: "If they take my stapler, I'll set the building on fire.",
    source: "Office Space",
    year: "1999",
    cite: "rottentomatoes",
    image: "If they take my stapler Ill set the building on fire.png"
  },
  {
    category: "Inspire",
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    year: "2019",
    cite: "briantracy",
    image: "Dont Let Yesterday Take Up Too Much Of Today.png"
  }
]

colors = ["red", "green", "blue", "purple", "gray", "black", "orange"] //No yellow or white for Text purposes

/***
  Generates random number, colors, and inputs background.
***/

var lastRandColor
var lastRandQuote

function getRandomQuote() {

  //define random vars
  var random_number_quote = Math.floor(Math.random()*quotes.length) //Generate random number between 0 and # of quotes - 1
  var random_number_color = Math.floor(Math.random()*colors.length) //Generate random number between 0 and # of colors - 1
  
  //Check for same ranom number as last time
  while(random_number_quote===lastRandQuote || (random_number_quote==1 && !ee)) //Avoid using same quote
    random_number_quote = Math.floor(Math.random()*quotes.length)
  while(random_number_color===lastRandColor) //Aviod using same color
    random_number_color = Math.floor(Math.random()*colors.length)
  
  //define more vars
  let q = quotes[random_number_quote] //Gets random quote Object
  let c = colors[random_number_color] //Gets random color String

  //Print Random stuff to screen
  document.getElementById("loadQuote").style.backgroundColor = c //Change Button Color
  document.body.style.backgroundColor = "white" //Change Background Color
  document.body.style.backgroundImage = `url('${q["image"]}')`; //Change background image depending on the random quote
  
  //store as previous quote (random numbers)
  lastRandQuote = random_number_quote
  lastRandColor = random_number_color
  return q
}


/***
   - Print Quote function is the fist called and last to return.
***/

function printQuote() {

  //Define vars
  var quote=getRandomQuote() //Get object/array
  var htmlStr = `<p class="quote">${quote["quote"]}</p><p class="source">${quote["source"]}` //String that will be converted to HTML Text code
  
  //Check if all values are present (Zach and Alex Edited This)
  if(quote.cite!=null) //check if cite exists
    htmlStr += `<span class="citation">${quote["cite"]}</span>`
  if(quote.year!=null) //check if year exists
    htmlStr += `<span class="year">${quote["year"]}</span>`
  htmlStr += `</p>`

  //Print stuff to screen
  document.getElementById("quote-box").innerHTML = htmlStr //Set Quotes
  document.getElementById("category").innerHTML = `<p class="category">${quote["category"]}</p>` //Set Category
  
  //If first quote, change button text
  if(document.getElementById("loadQuote").innerText == "click for quote") //Change button text from "click for quote" to "next quote"
    document.getElementById("loadQuote").innerText = "next quote"
}

function resetTime(){ //Reset Timer
  clearInterval(timerId); /*Edited by Alex*/
  timerId = setInterval(() => printQuote(), 10000);
}

/***
  When the "next quote" button is clicked, the printQuote() function runs.
  Also, the resetTime() function runs.
***/

//Load quote button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", resetTime, false);

//Categry
// document.getElementById('category').addEventListener("click", ee=true, false);
// document.getElementById('category').addEventListener("click", resetTime, false);