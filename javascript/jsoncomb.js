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
    }
];

let jsonData = JSON.stringify(devices);

console.log(jsonData);