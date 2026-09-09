let jsonData = '{"name":"Office-PC-01","antivirus":true}';

let device = JSON.parse(jsonData);

console.log(device.name);
console.log(device.antivirus);