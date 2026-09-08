let devices = [
    {
        name: "Office-PC-01",
        antivirus: true
    },
    {
        name: "Office-PC-02",
        antivirus: false
    },
    {
        name: "Manager-Laptop",
        antivirus: true
    }
];

let atRisk = devices.filter(function(device) {
    return device.antivirus === false;
});

console.log(atRisk);