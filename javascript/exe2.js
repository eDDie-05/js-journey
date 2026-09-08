const devices = [
  {
    name: "George's iMac",
    antivirus: true,
    firewall: true,
    backup: true
  },
  {
    name: "Work Laptop",
    antivirus: true,
    firewall: false,
    backup: true
  },
  {
    name: "Home Media PC",
    antivirus: false,
    firewall: false,
    backup: false
  }
];

function checkSecurity(device) {
  if (device.antivirus && device.firewall && device.backup) {
    return "Fully Secured";
  } else if (device.antivirus || device.firewall || device.backup) {
    return "At Risk (Missing protection)";
  } else {
    return "Vulnerable (No protection active)";
  }
}

for (const device of devices) {
  const status = checkSecurity(device);
  
  console.log(`Device: ${device.name} | Security Status: ${status}`);
}