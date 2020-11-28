/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator, by Andreas Myklebust Skomsøy
******************************************/

// The 'quotes' is:
// An array of Quote Objects, that has the properties: 
// quote - The quote itself
// source - The source of which the quote came from
// citation - From where the quote was published or used, be that a movie, book or article
// year - The year of origin or as citated
// tags - Hash-tags to to make the Random Quote Generator more 'hip', or give it an extra 'pop'
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
  }
];


// The 'getRandomQuote' is:
// An Arrow-Function that creates a random number depending on the lenght of the 
// Object Array: quotes, and returns one of those quotes using the generated number as index
const getRandomQuote = () => {
    const randNum = Math.floor( Math.random() * quotes.length );
    return quotes[randNum];
};


// The 'printQuote' is:
// An Arrow-Function that creates the final html string we need to project it on to the browser
// using conditional statements to only print certain parts if the dependancies are in place 
// and returning the final string
const printQuote = () => {
    const randomQuote = getRandomQuote();
    let html = `
        <p class="quote" >${randomQuote.quote}</p>
        <p class="source" >${randomQuote.source}
    `;
    if ( randomQuote.citation ) {
        html += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if ( randomQuote.year ) {
        html += `<span class="year">${randomQuote.year}</span>`;
    }
    if ( randomQuote.tags ) {
        html += `<br><span class="tags">${randomQuote.tags.join(' ')}</span>`;
    }
    html +=`</p>`;
    document.getElementById('quote-box').innerHTML = html;
};


// I removed the initial quote (in HTML) that came with the code, 
// and put in this to initialize it with one of my own quotes
printQuote();


// Click Event Listener for the button, calling on the printQuote function
// Please do not edit this code, thank you.

document.getElementById('load-quote').addEventListener("click", printQuote, false);