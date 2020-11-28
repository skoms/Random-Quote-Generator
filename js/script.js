/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// A quotes array of Quote Objects, that has the properties: quote, source, citation, year and tags
const quotes = [
  {
      quote: 'Our Deepest Fear Is Not That We Are Inadequate. Our Deepest Fear Is That We Are Powerful Beyond Measure.',
      source: 'Marianne Williamson',
      citation: 'A Return to Love: Reflections on the Principles of A Course in Miracles',
      year: 1992,
      tags: [ '#motivation', '#confidence', '#life' ]
  },
  {
      quote: 'It Always Seems Impossible Until It’s Done.',
      source: 'Pliny the Elder',
      citation: 'The Natural History of Pliny',
      year: 1855,
      tags: [ '#nothingisimpossible', '#believeinyourself', '#motivation' ]
  },
  {
      quote: 'Our Greatest Glory Is Not in Never Falling, But in Rising Every Time We Fall.',
      source: 'Oliver Goldsmith',
      citation: 'The Citizen of the World',
      year: 1762,
      tags: [ '#riseagain', '#strong', 'motivational' ]
  },
  {
      quote: "Find Out What You Like Doing Best and Get Someone To Pay You for Doing It.",
      source: 'The Observer',
      citation: 'Katharine Whitehorn',
      year: 1975,
      tags: [ '#passion' ]
  },
  {
      quote: "If You Seek Revenge You Should Dig Two Graves.",
      source: 'Japanese proverb',
      citation: 'The Mikado’s Empire, Book I: History of Japan From 660 B.C. to 1872 A.D.',
      year: 0,
      tags: [ '#wise', '#forgiveness' ]
  },
  {
      quote: "Tell Me and I Forget; Teach Me and I May Remember; Involve Me and I Learn.",
      source: 'Xun Kuang',
      citation: 'Xunzi, by Liu Xiang',
      year: 818,
      tags: [ '#teachings', '#philosofical' ]
  },
  {
      quote: "Better to Light a Candle Than to Curse the Darkness.",
      source: 'W. L. Watkinson',
      citation: 'The Invincible Strategy',
      year: 1907,
      tags: [ '#wise', '#profound' ]
  },
  {
      quote: "Who Wait Until Circumstances Completely Favor His Undertaking Will Never Accomplish Anything.",
      source: 'John Peter Lange',
      citation: 'A Commentary on the Holy Scriptures: Critical, Doctrinal, and Homiletical',
      year: 1868,
      tags: [ '#initiative', '#opportunistic' ]
  },
  {
      quote: "People Who Say It Cannot Be Done Should Not Interrupt Those Who Are Doing It.",
      source: 'Louis F. Post',
      citation: 'The Public, Number 257',
      year: 1903,
      tags: [ '#blockitout', '#belief', '#persistance' ]
  },
  {
      quote: "Choose a Job You Love, and You Will Never Have To Work a Day in Your Life.",
      source: 'Ann Woolfolk',
      citation: 'Princeton Alumni Weekly, Article Title: Toshiko Takaezu',
      year: 1982,
      tags: [ '#inspirational', '#passion', '#dreams' ]
  },
];

/***
 * `getRandomQuote` function
***/

// An Arrow-Function that creates a random number depending on the lenght of the 
// Object Array: quotes, and returns one of those quotes using the generated number as index
const getRandomQuote = () => {
    const randNum = Math.floor( Math.random() * quotes.length );
    return quotes[randNum];
}

/***
 * `printQuote` function
***/

const printQuote = () => {
    const randomQuote = getRandomQuote();
    let html = `
        <p class="quote" ></p>
        <p class="source" ></p>
    `;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);