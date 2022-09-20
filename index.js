var rs = require("readline-sync");
var score = 0;

function quiz(question, answer){
  var userAnswer = rs.question(question);

  if (userAnswer === answer){
    console.log("You are right!");
    score = score + 1;
    console.log("----------------------------------------")
  } else {
  console.log("you are wrong!");
  score = score - 1;
    console.log("------------------------------------------")
  }

}



quiz("What is the real name of batman ? ", "Bruce Wayne");

quiz("Who played the role of joker in Batman: the Dark Knight ? ", "Heath Ledger");
quiz("Who played actress role in the Dark Knight Rises? ", "Anne Hathaway")
quiz(" Who directed The Dark Knight Rises (2012)? ","Christophar Nolan");
quiz("Batman's Costume color? ", "Black")

console.log("Your score is ", score);