
function f(rating) {
  switch (rating) {
    case "-2":
      msg = "strongly disagree";
      break;
    case "-1":
      msg = "disagree";
      break;
    case "0":
      msg = "neither agree nor disagree";
      break;
    case "1":
      msg = "agree";
      break;
    case "2":
      msg = "strongly agree";
  }

  msg = "Your answer: " + rating + " <q>" + msg + "</q>";

  return msg;
}

/*
var x = "lit_text1";
var slider = document.getElementById(x);
var output = document.getElementById("ans_" + x);
output.innerHTML = f(slider.value);

slider.addEventListener("change", function() {
  output.innerHTML = f(slider.value);
}, false);
*/

function show_answer(x) {
  var slider = document.getElementById(x);
  var output = document.getElementById("ans_" + x);
  output.innerHTML = f(slider.value);
}

var displayed_answers = document.getElementsByClassName("ans");
for (item of displayed_answers) {
  item.innerHTML = f("0");
}

