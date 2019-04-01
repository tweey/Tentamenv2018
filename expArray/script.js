menyEl = document.getElementById("meny");
buttonEl = document.getElementById("button")

var array = [
  {navn:"test", tall:1},
  {navn:"test2", tall:2},
];
  
function vis() {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i].length);
      menyEl.innerHTML += array[i].navn + "<br>"
      menyEl.innerHTML += array[i].tall + "<br>"
  }
}

buttonEl.addEventListener("click", vis)
