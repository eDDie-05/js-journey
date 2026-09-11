export const initialDevices = [
    {
        id: 1,
        name: "Office-PC-01",
        operatingSystem: "Windows 11",
        employee: "John",
        department: "Finance",
        ipAddress: "192.168.1.10",
        antivirus: true,
        firewall: true,
        backup: true,
        online: true
    },

    {
        id: 2,
        name: "Manager-Laptop",
        operatingSystem: "macOS",
        employee: "Sarah",
        department: "Management",
        ipAddress: "192.168.1.11",
        antivirus: true,
        firewall: true,
        backup: false,
        online: true
    }
];

export const initialSecurityPolicy = {
    antivirusRequired: true,
    firewallRequired: true,
    backupRequired: true
};