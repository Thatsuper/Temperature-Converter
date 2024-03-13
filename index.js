const submit = document.getElementById("submitBtn")
const input = document.getElementById("input")
const toF = document.getElementById("toFahrenheit")
const toC = document.getElementById("toCelsius")
const result = document.getElementById("result")
const error = document.getElementById("error")

let temp;

submit.addEventListener("click", function (e) {
    e.preventDefault();
    
    if (toF.checked) {
        temp = Number(input.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F°"
    } else  if(toC.checked) {
        temp = Number(input.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "C°"
    } else {
        error.textContent = "Please choose a unit."
        error.classList.remove("visually-hidden")
        setTimeout(() => {
            error.classList.add("visually-hidden")
        }, 3000);
    }
})


