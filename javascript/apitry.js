async function getDevices() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        let devices = await response.json();

        for (let device of devices) {
            console.log("Device:", device.name);
        }

    } catch (error) {
        console.log("Error:", error);
    }
}

getDevices();