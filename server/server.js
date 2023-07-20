const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// Guess Array
let playersGuess = [
  {
    player1guess:4,
    player2guess:9
  }
]

let randomNum = Math.floor(Math.random () * (25 - 1) +1)


// GET & POST Routes go here
app.get('/getguess', (req, res) => {
  console.log('inside GET of guess')
  res.send(200)
})

app.post('/addguess',(req,res) => {
  let guessToAdd = req.body;
  playersGuess.push(guessToAdd);
  res.sendStatus(201);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
