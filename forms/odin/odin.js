const passInput = document.getElementById("password");
const confirmPassInput = document.getElementById("confirm-password");

function checkIfPasswordAreTheSame(e) {
    if (confirmPassInput.value !== passInput.value) {
        confirmPassInput.classList.add("error");
        console.log("bad password, does notm match");

        // submit button
        document.getElementById("bottom").disabled = true;
    }
    else {
        confirmPassInput.classList.remove("error");
        // submit button
        document.getElementById("bottom").disabled = false;
    }

}

confirmPassInput.addEventListener("input", checkIfPasswordAreTheSame);

