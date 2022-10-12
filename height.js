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

function grade(number) {
  if (number > 80) {
    return "good job";
  } else if (number > 49) {
    return "pass";
  } else {
    return "fail";
  }
}
function abs(num) {
  if (num >= 0) {
    return num;
  } else {
    return num * -1;
  }
}
function FTC(Fahr) {
  return ((Fahr - 32) * 5) / 9;
}
function heron(a, b, c) {
  let s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
function IsEven(num) {
  let A = num % 2;
  if (A === 0) {
    return true;
  } else {
    return false;
  }
}
function Divisibleby(num, div) {
  let A = num % div;
  if (A === 0) {
    return true;
  } else {
    return false;
  }
}
function pointlocation(X,Y){
if (X===0 && Y===0) {
  return "origin"
} else if(Y===0){
  return "x-axis"
}else if(X===0){
  return "Y-axis"
} else if (X>0 && Y>0) {
  return "quadrant I"
} else if (X<0 && Y>0){
  return "qaudrant II"
} else if (X<0 && Y<0){
  return "qaudrant III"
} else {
  return "qaudrant IV"
}
}

function(num){
  if(num===1 ){
    return `${num}st`

  }
}
