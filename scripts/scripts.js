// set inital value to zero
let count = 0;
// Elementos
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// Eventos
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    switch (styles[1]){
        case "decrease":
            count--
        break
        case "increase":
            count++
        break
        default:
            count = 0
    }
    if (count > 0){
        value.style.color = "green"
    }
    if (count < 0){
        value.style.color = "red"
    }
    if (count === 0){
        value.style.color = "#898"
    }
     value.textContent = count;
  });
});