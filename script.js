
function checkAnswers() {
  var q1 = document.querySelector('input[name="q1"]:checked').value;
  var q2 = document.querySelector('input[name="q2"]:checked').value;

  var score = 0;

  if (q1 == "a") {
    score++;
  }

  if (q2 == "c") {
    score++;
  }

  // Add more if statements here for additional questions

  var results = document.getElementById("results");
  results.innerHTML = "You scored " + score + " out of " + totalQuestions + ".";
}
