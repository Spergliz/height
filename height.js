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
function FTC(Fahr){
  return (Fahr -32)*5/9

}
function heron(a,b,c){
let s= (a+b+c)/2
return Math.sqrt(s * (s-a) * (s-b) * (s-c));

} // https://www.google.com/search?q=modulo&rlz=1C1GCEA_enCA1023CA1023&oq=modulo&aqs=chrome..69i57j0i131i433i512l3j0i512l5j0i131i433.3455j0j7&sourceid=chrome&ie=UTF-8
function even(num){
if (num % 2) { 


} 

}