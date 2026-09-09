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

console.log("JSON data:");
console.log(jsonData);

let data = JSON.parse(jsonData);

console.log("First device:", data[0].name);
console.log("Second device:", data[1].name);