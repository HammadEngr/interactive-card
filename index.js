//*************************** */ storing input Values to card **********************************

var numberOfInputs = document.querySelectorAll("input").length;

for (var i = 0; i < numberOfInputs; i++) {
    document.querySelectorAll("input")[i].addEventListener("input", updateValues);
}
function updateValues(e) {
    var idOfInput = this.id;
    switch (idOfInput) {
        case ("inputName"):
            document.querySelector(".nameOnCard").textContent = e.target.value
            break;

        case ("inputNumber"):
            document.querySelector(".numberOnCard").textContent = e.target.value
            break;

        case ("inputMonth"):
            document.querySelector(".month").textContent = e.target.value
            break;

        case ("inputYear"):
            document.querySelector(".year").textContent = e.target.value
            break;

        case ("inputCvc"):
            document.querySelector(".cvcOnCard").textContent = e.target.value
            break;

        default:
    }
}

//****************************** */ correction message display **************************

document.querySelector(".btnConfirm").addEventListener("click", function () {

    for (var i = 0; i < numberOfInputs; i++) {
        var empty = document.querySelectorAll("input")[i].value;
    }
    if (empty == "") {
        $(".correction").removeClass("hide")
    }
    else {
        document.querySelector(".credentials").classList.add("hide");
        document.querySelector(".thanksBox").classList.remove("hide");
    }
})

//****************************** */ Refresh form inputs **********************************

document.querySelector(".btnContinue").addEventListener("click", function () {
    document.querySelector(".thanksBox").classList.add("hide");
    document.querySelector(".credentials").classList.remove("hide");

    for (var i = 0; i < numberOfInputs; i++) {
        document.querySelectorAll("input")[i].value = ("");
    }
    $(".correction").addClass("hide");
})
