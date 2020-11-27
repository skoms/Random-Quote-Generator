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
const quotes = [
  {
      quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
      source: 'Nelson Mandela',
      citation,
      year
  },
  {
      quote: 'The way to get started is to quit talking and begin doing.',
      source: 'Walt Disney',
      citation,
      year
  },
  {
      quote: 'Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking.',
      source: 'Steve Jobs',
      citation,
      year
  },
  {
      quote: "If life was predictable it would cease to be life, and be without flavor.",
      source: 'Eleanor Roosevelt',
      citation,
      year
  },
  {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      source: 'Oprah Winfrey',
      citation,
      year
  },
  {
      quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
      source: 'James Cameron',
      citation,
      year
  },
  {
      quote: "Life is what happens when you're busy making other plans.",
      source: 'John Lennon',
      citation,
      year
  },
  {
      quote: "Even if a river flows with milk, a dog can take in only one lick at a time",
      source: 'Tamil proverb',
      citation,
      year
  },
  {
      quote: "Silent gratitude isn't much use to anyone.",
      source: 'G. B. Stem',
      citation,
      year
  },
  {
      quote: "Gossip and anger are like drinking poison and expecting someone else to die.",
      source: 'Unknown',
      citation,
      year
  },
  {
      quote: "Shattered legs may heal in time, but some betrayals fester and poison the soul.",
      source: 'George R.R. Martin',
      citation,
      year
  },
  {
      quote: "The death clock is ticking slowly in our breast, and each drop of blood measures its time, and our life is a lingering fever.",
      source: 'Karl Georg Bchner',
      citation,
      year
  },
  {
      quote: "You will face many defeats in life, but never let yourself be defeated.",
      source: 'Maya Angelou',
      citation,
      year
  },
  {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      source: 'Nelson Mandela',
      citation,
      year
  },
  {
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
      source: 'Abraham Lincoln',
      citation,
      year
  },
  {
      quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
      source: 'Dr. Seuss',
      citation,
      year
  },
  {
      quote: "Only a life lived for others is a life worthwhile.",
      source: 'Albert Einstein',
      citation,
      year
  },
  {
      quote: "The purpose of our lives is to be happy.",
      source: 'Dalai Lama',
      citation,
      year
  },
  {
      quote: "Life is really simple, but we insist on making it complicated.",
      source: 'Confucius',
      citation,
      year
  },
  {
      quote: "Love the life you live. Live the life you love.",
      source: 'Bob Marley',
      citation,
      year
  },
  {
      quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
      source: 'Winston S. Churchill',
      citation,
      year
  },
  {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      source: 'Henry David Thoreau',
      citation,
      year
  },
  {
      quote: "Success is walking from failure to failure with no loss of enthusiasm.",
      source: 'Winston S. Churchill',
      citation,
      year
  },
  {
      quote: "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
      source: 'Thomas J. Watson',
      citation,
      year
  },
  {
      quote: "Before anything else, preparation is the key to success.",
      source: 'Alexander Graham Bell',
      citation,
      year
  },
];


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);