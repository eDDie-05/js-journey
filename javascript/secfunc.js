function checkSecurity(device) {
    if (device.antivirus && device.firewall && device.backup) {
        return "Secure";
    } else {
        return "At Risk";
    }
}
let device = {
    name: "Office-PC-01",
    antivirus: true,
    firewall: true,
    backup: false
};

let status = checkSecurity(device);

console.log("Device:", device.name);
console.log("Status:", status);
