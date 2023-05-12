const quotes = [
  {
    "Darth Vader": [
      "Ive been waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was but the learner; now I am the master.",
      "The Force is strong with this one.",
      "No. I am your father.",
      "I find your lack of faith disturbing",
      "You have failed me for the last time.",
      "I am altering the deal. Pray I don’t alter it any further.",
      ,
    ],
  },
  {
    "Obi-Wab Kenobi": [
      "Use the Force, Luke.",
      "You were the chosen one! It was said that you would destroy the Sith, not join them. You were to bring balance to the Force, not leave it in darkness.",
      "In my experience, there’s no such thing as luck.",
      "You were my brother, Anakin. I loved you.",
      "I have a bad feeling about this.",
    ],
  },
  {
    "Han Solo": [
      "Never tell me the odds!",
      "Chewie, we’re home.",
      "Great, kid. Don’t get cocky.",
    ],
  },
  {
    Yoda: [
      "Judge me by my size, do you?",
      "Do. Or do not. There is no try.",
      "Fear is the path to the dark side.",
    ],
  },
  {
    "Princess Leia": [
      "Help me Obi-Wan Kenobi, you’re my only hope.",
      "Aren’t you a little short for a stormtrooper?",
      "I’d just as soon kiss a Wookiee.",
    ],
  },
  {
    "Emperor Palpatine": [
      "Did You Ever Hear The Tragedy Of Darth Plagueis The Wise?",
      "So be it... Jedi.",
      "There is a great disturbance in the Force.",
      "The Dark Side Of The Force Is A Pathway To Many Abilities Some Consider To Be Unnatural.",
      "Now Young Skywalker, You Will Die.",
      "Execute Order Sixty-Six!",
      "Power! Unlimited power!",
    ],
  },
];

const photos = [
  "darth-vader-resized.jpg",
  "obi-wan-kenobi.jpg",
  "HanSolo.jpg",
  "yoda.jpg",
  "Leia.jpg",
  "Palpatine.jpg",
];

var button = document.querySelector(".generate");
var imageEl = document.createElement("img");
imageEl.setAttribute("id", "image");
var quoteEl = document.createElement("p");
quoteEl.setAttribute("id", "quote");
var box = document.querySelector("#box");

let prevQuote;

const displayQuote = () => {
  box.appendChild(quoteEl);
  box.appendChild(imageEl);

  let index = Math.floor(Math.random() * quotes.length);
  let key = Object.keys(quotes[index]);
  let keyArray = quotes[index][key];
  let secondIndex = Math.floor(Math.random() * keyArray.length);
  let quote = quotes[index][key][secondIndex];
  img = photos[index];

  if (quote === prevQuote && secondIndex + 1 < keyArray.length) {
    quote = quotes[index][key][secondIndex + 1];
  } else if (quote === prevQuote && secondIndex + 1 === keyArray.length) {
    quote = quotes[index][key][secondIndex - 1];
  }

  document.querySelector(
    "#quote"
  ).innerHTML = `<q>${quote} - <em><b>${key}</b></em></q>`;

  document.querySelector("#image").src = `${img}`;

  prevQuote = quote;
};

button.addEventListener("click", displayQuote);
