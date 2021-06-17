// Your age in Days
function ageInDays() {
  var birthyear = prompt( "what year were you born.....Good friend?" );
  var ageInDayss = ( 2077 - birthyear ) * 365;
  var h1 = document.createElement( "h1" );
  var textAnswer = document.createTextNode( "you are " + ageInDayss + " days old." );
  h1.setAttribute( "id", "ageInDays" );
  h1.appendChild( textAnswer );
  document.getElementById( "flex-box-result" ).appendChild( h1 );
}

function reset() {
  document.getElementById( "ageInDays" ).remove();
}
//generate gif

function generate() {
  var image = document.createElement( "img" );
  var container2 = document.getElementById( "gen-gif" );

  image.src = "https://wp-modula.com/wp-content/uploads/2018/12/gifgif.gif";
  container2.appendChild( image );
}
//Rock, Paper, Scissors

function rpsGame( yourChoice ) {
  console.log( yourChoice );
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice( randomRpsInt() );
  console.log( 'computerChoice:', botChoice );
  results = decideWinner( humanChoice, botChoice ); //(0, 1) humanlost |bot won
  console.log( results );
  message = finalMessage( results ); //('message': 'you won!', 'color': 'green')
  rpsFrontEnd( yourChoice.id, botChoice, message );
}

function randomRpsInt() {
  return Math.floor( Math.random() * 3 );
}

function numberToChoice( number ) {
  return ['rock', 'paper', 'scissor'][number];
}

function decideWinner( yourChoice, computerChoice ) {
  var rpsDatabase = {
    'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
    'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 1 }
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage( [yourScore, computerScore] ) {
  if ( yourScore === 0 ) {
    return { 'message': 'You lost!', 'color': 'red' };
  } else if ( yourScore === 0.5 ) {
    return { 'message': 'You tied!', 'color': 'Yellow' };
  }
  else {
    return { 'message': 'You Won!', 'color': 'Green' };
  }

}

function rpsFrontEnd( humanImageChoice, botImageChoice, finalMessage ) {
  var imagesDatabase = {
    'rock': document.getElementById( 'rock' ).src,
    'paper': document.getElementById( 'paper' ).src,
    'scissor': document.getElementById( 'scissor' ).src

  }


  // let's remove all the images 
  document.getElementById( 'rock' ).remove();
  document.getElementById( 'paper' ).remove();
  document.getElementById( 'scissor' ).remove();

  var humanDiv = document.createElement( 'div' );
  var botDiv = document.createElement( 'div' );
  var messageDiv = document.createElement( 'div' );

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"

  messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size : 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

  document.getElementById( 'flex-box-rps-div' ).appendChild( humanDiv );
  document.getElementById( 'flex-box-rps-div' ).appendChild( botDiv );
  document.getElementById( 'flex-box-rps-div' ).appendChild( messageDiv );

}