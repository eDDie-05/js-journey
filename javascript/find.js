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

let device = devices.find(function(device) {
    return device.name === "Office-PC-02";
});

console.log(device);