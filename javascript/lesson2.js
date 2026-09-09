const devices = [
    {
        name: "Office-PC-01",
        operatingSystem: "Windows 11",
        antivirus: true
    },
    {
        name: "Manager-Laptop",
        operatingSystem: "macOS",
        antivirus: false
    }
];

const newDevices = [
    ...devices,
    {
        name: "Reception-PC",
        operatingSystem: "Windows 11",
        antivirus: true
    }
];

const checkSecurity = (device) => {
    const { name, antivirus } = device;

    if (antivirus) {
        return `${name} is secure`;
    }

    return `${name} is at risk`;
};

for (const device of newDevices) {
    console.log(checkSecurity(device));
}