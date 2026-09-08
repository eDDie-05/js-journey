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

function checkSecurity(device) {
    if (device.antivirus && device.firewall && device.backup) {
        console.log(device.name, "is secure");
    } else {
        console.log(device.name, "is at risk");
    }
}

for (let device of devices) {
    checkSecurity(device);
}