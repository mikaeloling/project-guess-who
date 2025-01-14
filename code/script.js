// All the DOM selectors stored as short variables

const board = document.getElementById('board')  //board is the id of the div in html file where the cards are displayed

const questions = document.getElementById('questions') //questions is the id of the select element in html file

const restartButton = document.getElementById('restart') //restart is the id of the button element in html file

const resultScreen = document.getElementById('winOrLoseSection') //winOrLoseSection is the id of the section element in html file

const resultText= document.getElementById('winOrLoseText') //winOrLoseText is the id of the p element in html file

const playAgainButton = document.getElementById('playAgain') //playAgain is the id of the button element in html file

const findOutButton = document.getElementById('filter') //filter is the id of the button element in html file

//declaring a clock counter for the website, it starts at 2 minutes and counts down to 0
// In minute format, sarting at 02:00
let time = 120




// Function to format the time as "MM:SS"
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
/* This code will display the initial time as "02:00" and then count down in the "MM:SS" format until it reaches "00:00". When it reaches "00:00", you can add your logic to handle the end of the timer. 
*/

// When timer starts, display the starting time

document.getElementById("timer").innerHTML = formatTime(time)
let timer = setInterval(function() {
  time--; // decrease time by 1
  if (time <= 0) {
    clearInterval(timer)
    alert("You lost! The correct person was " + secret.name + ".");
    winOrLose.style.display = 'flex';
    board.style.display = 'none';
    winOrLoseText.innerHTML = `You lost! The correct person was ${secret.name}.`
  }
  document.getElementById("timer").innerHTML = formatTime(time);
 // update the element where the timer will be displayed
}, 1000)//1000ms = 1s




// Array with all the characters, as objects
const CHARACTERS = [ 
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]
 
// Global variables
let secret // The current secret person
let keep // The current keep value for filtering
let currentQuestion // The current question in play
let charactersInPlay// charactersInPlay is an array of objects


// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}
// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret);
}

/// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  board.style.display = 'flex'
  winOrLose.style.display = 'none'
  // What else should happen when we start the game?
  //Game board should be rendered on the screen
  generateBoard();
  setSecret();
  //startTimer(); // can't get this to work together with findout dropdown filter 
}
  
// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].value

  currentQuestion = {
    category: category,
    value: value
  }
  console.log(currentQuestion);
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  const { category, value } = currentQuestion // MISSING PIECE THAT FINALLY MADE THE FILTER WORK..currentQuestion is an object with two properties: category and value. Declaring these two variables and assigning them to the properties of currentQuestion object makes it possible to use them in the if statement below.

  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
    //(value === secret[category]) {
     // filterCharacters(true)
      console.log("keep")
    } else
      filterCharacters(false)
    console.log("remove")

  } else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {
      filterCharacters(true)
      console.log("keep")
    } else
      filterCharacters(false)
    console.log("remove")
  }
}

// It'll filter the characters array and redraw the game board.
// Determine what is the category
// filter by category to keep or remove based on the keep variable.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wear ${value}.`
      )
      //filter out people from the charactersInPlay array using the filter method
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wear ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person has a ${value}! Keep all people that have a ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't have a ${value}! Remove all people that have a ${value}.`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'eyes') {
    // Similar to the one above
    if (keep) {
      alert(
        `Yes, the person has ${value} eyes! Keep all people that have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      alert(
        `No, the person doesn't have ${value} eyes! Remove all people that have ${value} eyes.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  } else {
    if (keep) {
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all people with yellow hair"
      alert(
        `Yes, the person has ${value} hair! Keep all people that have ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value)
    } else {
      // alert popup that says something like: "No, the person doesnt have yellow hair! Remove all people with yellow hair"
      alert(
        `No, the person doesn't have ${value} hair! Remove all people that have ${value} hair.`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value)
    }
  }

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first has to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  const confirmation = confirm(`Are you sure you want to guess ${personToConfirm}?`)
  // If the player wants to guess, invoke the checkMyGuess function.
  if (confirmation === true) {
    checkMyGuess(personToConfirm)
  }
}
// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  // 1. Check if the personToCheck is the same as the secret person's name
  // 3. Show the win or lose section
  winOrLose.style.display = 'flex';
  // 4. Hide the game board
  board.style.display = 'none';
  // 2. Set a Message to show in the win or lose section accordingly
  if (secret.name === personToCheck) {
    winOrLoseText.innerHTML = `You guessed right! Congratulations, you are a winner!`
  } else {
    winOrLoseText.innerHTML = `You lost! The correct person was ${secret.name}.`
  }
}
// Invokes the start function when website is loaded
start()
  
// Show the correct alert message for different categories
alert(`You have ${charactersInPlay.length} characters left.`)

// All the event listeners
restartButton.addEventListener('click', start)

questions.addEventListener('change', selectQuestion)

findOutButton.addEventListener('click', checkQuestion)

playAgainButton.addEventListener('click', start)




  // 1. Check if the personToCheck is the same as the secret person's name
   //secret.name is the name of the secret person
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
