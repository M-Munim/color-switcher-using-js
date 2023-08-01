const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach(function (button) {


    button.addEventListener("click", function (event) {
        console.log(event);
        console.log(event.target);

        if (event.target.id == "grey") {
            body.style.background = "grey"
            body.style.background = event.target.id

        } else if (event.target.id == "green") {
            body.style.background = event.target.id

        } else if (event.target.id == "blue") {
            body.style.background = "blue"

        } else {
            body.style.background = "yellow"
        }

    })
})