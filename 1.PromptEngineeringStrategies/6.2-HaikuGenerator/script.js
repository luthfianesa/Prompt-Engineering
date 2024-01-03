/*
Prompt: "Generate 3 JavaScript arrays for a haiku generator where each array represents a line of the haiku. The first and third arrays should contain phrases with 5 syllables, and the second array should contain phrases with 7 syllables. All the phrases should relate to artificial intelligence."
 */

const lineOne = [
  "Machines start to think", 
  "Neural nets begin to weave", 
  "Silicon dreams spin",
  "Bytes become insights",
  "In the hum of code"
];

const lineTwo = [
  "Learning from data's vast sea", 
  "Algorithms grow, evolve free", 
  "In the depth of ones and zeroes", 
  "Deep Blue to neural flows",
  "AI's dance, a complex spree"
];

const lineThree = [
  "Future now seems near",
  "Code's poetry takes flight",
  "Minds meld, wires entwined",
  "A new dawn of thought",
  "Logic fuses, sparks ignite"
];

/* 
Write a JavaScript function to randomly select one string from 3 arrays
of strings, and return a combined string where each haiku is on a separate line.
*/

function generateHaiku(lineOne, lineTwo, lineThree) {
  const getRandomLine = (array) => array[Math.floor(Math.random() * array.length)];

  const firstLine = getRandomLine(lineOne);
  const secondLine = getRandomLine(lineTwo);
  const thirdLine = getRandomLine(lineThree);

  return `${firstLine}\n${secondLine}\n${thirdLine}`;
}

/* Create a button in JavaScript that, when clicked, triggers the generateHaiku function and displays the haiku to the webpage. */ 

document.getElementById('generateButton').addEventListener('click', function() {
  const haiku = generateHaiku(lineOne, lineTwo, lineThree);
  document.getElementById('haikuOutput').textContent = haiku;
});

/*
Challenge met with grace,
Generator speaks in verse,
Student claims their place.
*/ 