// Set the questions
const quiz = [
    ["What is the current Prophet real name?","Russell M. Nelson"],
    ["In which year was the church restored?","1830"],
    ["When was the gospel restored?","1820"]
  ];

function start(quiz){
  // initialize score
   let score = 0;

  // main game loop
  for(const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
  }
  // end of main game loop

  gameOver();

  // function declarations
  function ask(question){
    return prompt(question);
  }

  function check(response,answer){
    // check if answer is correct
    if(response === answer){
      alert('Correct!');
      // increase score by 1
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }

  function gameOver(){
    // At the end of the game, report the player's score
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}

start(quiz);
