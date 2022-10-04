//varis

function checkHeight(height) {
  if (height < 82) {
    return "Too short for ride";
  } else {
    return "All Aboard!";
  }
}

function analyzeNumber(number) {
  if (number > 0) {
    return "postive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}

function Greetings(name, TOD) {
  return `Hello ${name}. Have a great ${TOD}!`;
}

function grade(number){
if (number >80){
  return "good job"
} else if (number >49){
  return "pass"
} else {
  return "fail"
}

}