
function prep_msg(rating) {
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

function show_answer(x) {
  var slider = document.getElementById(x);
  var output = document.getElementById("ans_" + x);
  output.innerHTML = prep_msg(slider.value);
}

var displayed_answers = document.getElementsByClassName("ans");
for (item of displayed_answers) {
  item.innerHTML = prep_msg("0");
}

var why_prompts = document.getElementsByClassName("prompt_explain_0");
for (item of why_prompts) {
  item.innerHTML = "Please explain briefly if you give a rating of 0 (neither agree nor disagree):";
} 

