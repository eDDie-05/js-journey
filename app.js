let status = document.getElementById("status");
let button = document.getElementById("checkButton");

let device = {
    name: "Office-PC-01",
    antivirus: true,
    firewall: true,
    backup: true
};

button.addEventListener("click", function() {

    if (device.antivirus && device.firewall && device.backup) {
        status.textContent = "Office-PC-01 is secure";
    } else {
        status.textContent = "Office-PC-01 is at risk";
    }

});