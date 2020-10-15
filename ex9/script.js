
function problem_09() {

  var outputObj = document.getElementById("output");

  var a = parseInt(prompt("Please enter a number: ", ""));
 
  
outputObj.innerHTML = "number: " + a + "<br><br>its digits: ";

while (a > 1){
  num = a % 10;
  outputObj.innerHTML += num + ",";
  a = Math.floor(a / 10);
}

  outputObj.innerHTML =  outputObj.innerHTML + "<br><br>" + "program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}

