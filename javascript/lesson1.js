let devices = [
    "Office-PC-01",
    "Office-PC-02",
    "Laptop-01"
];

devices.push("Laptop-02");

for (let device of devices) {
    console.log("Device:", device);
}
let device = {
    name: "Office-PC-01",
    operatingSystem: "Windows 11",
    antivirus: true,
    firewall: true,
    backup: false
};
console.log(device.operatingSystem);
console.log(device.antivirus);
console.log(device.firewall);
console.log(device.backup);
let device = {
    name: "Office-PC-01",
    operatingSystem: "Windows 11",
    antivirus: true,
    firewall: true,
    backup: false
};

console.log("Device:", device.name);
console.log("OS:", device.operatingSystem);
console.log("Antivirus:", device.antivirus);
console.log("Firewall:", device.firewall);
console.log("Backup:", device.backup);

if (device.antivirus && device.firewall && device.backup) {
    console.log("Device is secure");
} else {
    console.log("WARNING: Device is at risk");
}
for (let device of devices) {
    console.log("Checking:", device.name);

    if (device.antivirus && device.firewall && device.backup) {
        console.log("Status: Secure");
    } else {
        console.log("Status: At Risk");
    }
}