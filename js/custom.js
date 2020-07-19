
//its for eventlesaner
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginAria = document.getElementById("login-aria");
    loginAria.style.display = "none";
    const trensictonArea = document.getElementById("trensiction-area");
    trensictonArea.style.display = "block";
})

//its for dipositer
const addDeposit = document.getElementById("addDiposit");
addDeposit.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    updateSpanText("curentDeposite", depositNumber);
    updateSpanText("curentBalece", depositNumber);


    document.getElementById("depositAmount").value = "";
})

//its tor withdrow option
const withdrowBtn = document.getElementById("addWithdrow");
withdrowBtn.addEventListener("click", function () {

    const withdrowNumber = getInputNumber("withdrowAmount");
    updateSpanText("currentWithdrow", withdrowNumber);
    updateSpanText("curentBalece", -1 * [,lo0gv dxwithdrowNumber);

    document.getElementById("withdrowAmount").value = "";
})

function getInputNumber(id) {
    const withdrowAmount = document.getElementById(id).value;
    const withdrowNumber = parseFloat(withdrowAmount);
    return withdrowNumber;
}

function updateSpanText(id, depositNumber) {
    const curentBalence = document.getElementById(id).innerText;
    const curentBalenceNumber = parseFloat(curentBalence);
    const totalBalence = depositNumber + curentBalenceNumber;
    document.getElementById(id).innerText = totalBalence;
}