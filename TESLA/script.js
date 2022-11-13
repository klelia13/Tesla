document.querySelector(".decTempUnits").addEventListener("click", decreaseUnits);
// Fonction pour diminuer la température
function decreaseUnits() {
  var units = document.getElementsByClassName("temp")[0].innerHTML
  if (units > 15) {
    units--;
    document.getElementsByClassName("temp")[0].innerHTML = units;
    document.querySelector(".demo").innerHTML = "";
  } 
}

document.querySelector(".incTempUnits").addEventListener("click", increaseUnits);
// Fonction pour augmenter la température
function increaseUnits() {
  var units = document.getElementsByClassName("temp")[0].innerHTML
  if (units < 28) {
    units++;
    document.getElementsByClassName("temp")[0].innerHTML = units;
    document.querySelector(".demo").innerHTML = "";
  }

}
