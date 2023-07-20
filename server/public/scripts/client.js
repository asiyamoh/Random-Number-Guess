$(document).ready(handleReady);

let guesses;

function handleReady() {
  // console.log("jquery is loaded!")

  //HANDLER
  $('#submitBtn').on('click', submitGuess)
  $('#restartbtn').on('click', restartGame)

  getGuess()
}

// function for submit 
function submitGuess () {
  const newGuess =  {
    player1guess:6,
    player2guess:9
  }
 
  $.ajax({
    method:"POST",
    url:"/addguess",
    data:newGuess
  }).then((response)=>{
    getGuess()
    render()
  }).catch((error) =>{
    console.log('Error with post',error);
    alert('Error with post')
  })


  let getGuess = () => {
    $.ajax({
      method: "GET",
      url: '/getguess',
    }).then((response) => {
      guesses = response
      render ()
    }).catch ((error) => {
      console.log('Error with GET', error)
      alert('Error with GET')
    })
  }


  let render =() => {
    $('#playerTable').empty();
    for(let guess of guesses){
      console.log(guess);
      $('#playerTable').append(` 
        <tr>
        <td>${guess.player1guess}</td>
        <td>${guess.player2guess}</td>
        </tr>
      `)
    }
  }









}


//function for restart
function restartGame (){
  console.log('restart is working too!!')
}