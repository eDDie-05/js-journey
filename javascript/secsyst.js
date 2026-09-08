let devices = [
    {
        name: "Office-PC-01",
        antivirus: true,
        firewall: true,
        backup: true
    },

    {
        name: "Office-PC-02",
        antivirus: false,
        firewall: true,
        backup: true
    },

    {
        name: "Manager-Laptop",
        antivirus: true,
        firewall: true,
        backup: false
    }
];

// Get all device names
let names = devices.map(function(device) {
    return device.name;
});

console.log("All devices:");
console.log(names);

// Get devices without antivirus
let noAntivirus = devices.filter(function(device) {
    return device.antivirus === false;
});

console.log("Devices without antivirus:");
console.log(noAntivirus);

// Find one specific device
let selectedDevice = devices.find(function(device) {
    return device.name === "Manager-Laptop";
});

console.log("Selected device:");
console.log(selectedDevice);