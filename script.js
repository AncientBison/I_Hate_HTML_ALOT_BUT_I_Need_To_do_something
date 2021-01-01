function type(classname) {
  a = document.getElementsByClassName(classname);
  for (var i = 0; i < a.length; i++) {
    a[i].innerText = "?";
  }
}
type("p");
type("o");

o = "o"
p = "p"
input = ""
code = "fghijklmnopqrstuvwxz"

function setCharecter(board, number, letter) {
  console.log(board + JSON.stringify(number))
  document.getElementById(board + JSON.stringify(number)).innerText = letter;
}

function askForLetter(td) {
  td.innerText = code.split("")[td.id.split("o")[1]-6] == "x" ? "xy" : code.split("")[td.id.split("o")[1]-6]
}