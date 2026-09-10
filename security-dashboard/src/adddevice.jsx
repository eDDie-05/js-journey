import { useState } from "react";

function AddDevice({ setDevices }) {

    const [deviceName, setDeviceName] = useState("");
    const [operatingSystem, setOperatingSystem] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newDevice = {
            name: deviceName,
            operatingSystem: operatingSystem,
            antivirus: true,
            firewall: true,
            backup: false
        };

        setDevices(previousDevices => [
            ...previousDevices,
            newDevice
        ]);

        setDeviceName("");
        setOperatingSystem("");
    }

    return (
        <div>
            <h2>Add Device</h2>

            <form onSubmit={handleSubmit}>

                <label>Device Name</label>
                <br />

                <input
                    type="text"
                    value={deviceName}
                    onChange={(event) =>
                        setDeviceName(event.target.value)
                    }
                />

                <br />
                <br />

                <label>Operating System</label>
                <br />

                <input
                    type="text"
                    value={operatingSystem}
                    onChange={(event) =>
                        setOperatingSystem(event.target.value)
                    }
                />

                <br />
                <br />

                <button type="submit">
                    Add Device
                </button>

            </form>
        </div>
    );
}

export default AddDevice;