$(document).ready(handleReady);

let guesses;

function handleReady() {
  // console.log("jquery is loaded!")

  //HANDLER
  $('#submitBtn').on('click', submitGuess);
  $('#restartbtn').on('click', restartGame);

  getGuess()

}

// function for submit 
function submitGuess() {
  let newGuess = {
    player1guess: $('#player1').val(),
    player2guess: $('#player2').val()
  }


  $.ajax({
    method: "POST",
    url: "/addguess",
    data: newGuess
  }).then((response) => {
    getGuess()
    render()
  }).catch((error) => {
    console.log('Error with post', error);
    alert('Error with post')
  })
}

let getGuess = () => {
  $.ajax({
    method: "GET",
    url: '/getguess',
  }).then((response) => {
    guesses = response
    render()
  }).catch((error) => {
    console.log('Error with GET', error)
    alert('Error with GET')
  })
}


let render = () => {
  $('#playerTable').empty();
  let randomNum = 7;
  for (let guess of guesses) {
    console.log(guess);
    $('#playerTable').append(` 
        <tr>
        <td class = 'player1td'>${guess.player1guess}</td>
        <td class = 'player2td'>${guess.player2guess}</td>
        </tr>
       `)
    if (guess.player1guess > randomNum) {
      $('#playerTable').append(` 
        <tr>
        <td class = 'tooHigh'>TOO HIGH</td>
        <td> </td>
        </tr>
      `)
    }
    if (guess.player1guess < randomNum) {
      $('#playerTable').append(` 
        <tr>
        <td class = 'tooLow'>TOO LOW></td>
        </tr>
      `)
    }
    if (guess.player1guess == randomNum) {
      $('#playerTable').append(` 
      <tr>
      <td class = 'rightAnswer'>🌟Winner🌟</td>
      </tr>
    `)
    }
    if (guess.player2guess > randomNum) {
      $('#playerTable').append(` 
      <tr>
      <td> </td>
      <td class = 'tooHigh'>TOO HIGH</td>
      </tr>
    `)
    }
    if (guess.player2guess < randomNum) {
      $('#playerTable').append(` 
      <tr>
      <td> </td>
      <td class = 'tooLow'>TOO LOW</td>
      </tr>
    `)
    }
    if (guess.player2guess == randomNum) {
      $('#playerTable').append(` 
    <tr>
    <td> </td>
    <td class = 'rightAnswer'>🌟Winner🌟</td>
    </tr>
  `)
    }

  }
}





//function for restart
function restartGame() {
  console.log('restart is working too!!')
  $('#playerTable').empty();
}