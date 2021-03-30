// Your age in Days
function ageInDays(){
var birthyear = prompt("what year were you born.....Good friend?");
var ageInDayss = (2077 - birthyear) * 365 ;
var h1 = document.createElement("h1");
var textAnswer = document.createTextNode("you are " + ageInDayss + " days old.");
h1.setAttribute("id", "ageInDays");
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
  document.getElementById("ageInDays").remove();
}
//generate gif

 function generate() {
  var image = document.createElement("img");
  var container2 = document.getElementById("gen-gif");
  image.src = "https://cdn2.thecatapi.com/images/d7m.gif";
  container2.appendChild(image);
}



