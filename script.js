function type(classname) { //types a charecter through out one board.
  a = document.getElementsByClassName(classname);
  for (var i = 0; i < a.length; i++) {
    a[i].innerText = "?";
  }
}

type("pl");
type("ol");

o = "o"
p = "p"
input = ""
code = "fghijklmnopqrstuvwxz"
op_word = "abcde"

function setCharecter(board, number, letter) { //when opponent takes a letter 
  console.log(board + JSON.stringify(number))
  document.getElementById(board +  "l" + JSON.stringify(number)).innerText = letter;
}

function askForLetter(td) { //gets a opponets letter based on a twenety charecter code
  td.querySelector(".ol").style.backgroundColor = "black"
  td.querySelector(".ol").innerText = code.split("")[td.id.split("o")[1]-6] == "x" ? "xy" : code.split("")[td.id.split("o")[1]-6]
}

function say(message) { //shows a overlay message
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlaytext").innerText = message
}

function closeOverlay() { //closes the overlay
  document.getElementById("overlay").style.display = "none";
}

function finishGame() { //changes top letters based on opponent word
  document.getElementById("o1").querySelector(".ol").style.backgroundColor = "black"
  document.getElementById("o1").querySelector(".ol").innerText = op_word.split("")[document.getElementById("o1").id.split("o")[1] - 1]
  document.getElementById("o2").querySelector(".ol").style.backgroundColor = "black"
  document.getElementById("o2").querySelector(".ol").innerText = op_word.split("")[document.getElementById("o2").id.split("o")[1] - 1]
  document.getElementById("o3").querySelector(".ol").style.backgroundColor = "black"
  document.getElementById("o3").querySelector(".ol").innerText = op_word.split("")[document.getElementById("o3").id.split("o")[1] - 1]
  document.getElementById("o4").querySelector(".ol").style.backgroundColor = "black"
  document.getElementById("o4").querySelector(".ol").innerText = op_word.split("")[document.getElementById("o4").id.split("o")[1] - 1]
  document.getElementById("o5").querySelector(".ol").style.backgroundColor = "black"
  document.getElementById("o5").querySelector(".ol").innerText = op_word.split("")[document.getElementById("o5").id.split("o")[1] - 1]
}