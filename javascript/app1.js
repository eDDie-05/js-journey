let form = document.getElementById("deviceForm");

let deviceName = document.getElementById("deviceName");
let operatingSystem = document.getElementById("operatingSystem");

let result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Device:", deviceName.value);
    console.log("OS:", operatingSystem.value);

    result.textContent =
        "Device added: " + deviceName.value +
        " (" + operatingSystem.value + ")";

});