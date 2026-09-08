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

let names = devices.map(function(device) {
    return device.name;
});

console.log(names);