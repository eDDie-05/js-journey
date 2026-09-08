let devices = [
  {
    name: "Office-PC-01",
    operatingSystem: "Windows 11",
    antivirus: true,
    firewall: true,
    backup: false
  },
  {
    name: "Office-PC-02",
    operatingSystem: "Windows 10",
    antivirus: false,
    firewall: true,
    backup: false
  },
  {
    name: "Office-PC-03",
    operatingSystem: "Windows XP",
    antivirus: true,
    firewall: false,
    backup: true
  }
];
for (let device of devices) {
  console.log("Checking:", device.name);

  if (device.antivirus && device.firewall && device.backup) {
    console.log("Status: Secure");
  } else {
    console.log("Status: At Risk");
  }
}