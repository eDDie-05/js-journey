import { useState } from "react";

function AddDevice({ setDevices }) {
    const [deviceName, setDeviceName] = useState("");
    const [operatingSystem, setOperatingSystem] = useState("");
    const [employee, setEmployee] = useState("");
    const [department, setDepartment] = useState("");
    const [ipAddress, setIpAddress] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const newDevice = {
            id: Date.now(),
            name: deviceName,
            operatingSystem: operatingSystem,
            employee: employee,
            department: department,
            ipAddress: ipAddress,
            antivirus: true,
            firewall: true,
            backup: false,
            online: true
        };

        setDevices(previousDevices => [
            ...previousDevices,
            newDevice
        ]);

        setDeviceName("");
        setOperatingSystem("");
        setEmployee("");
        setDepartment("");
        setIpAddress("");
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
                    required
                />

                <br /><br />

                <label>Operating System</label>
                <br />
                <input
                    type="text"
                    value={operatingSystem}
                    onChange={(event) =>
                        setOperatingSystem(event.target.value)
                    }
                    required
                />

                <br /><br />

                <label>Employee</label>
                <br />
                <input
                    type="text"
                    value={employee}
                    onChange={(event) =>
                        setEmployee(event.target.value)
                    }
                    required
                />

                <br /><br />

                <label>Department</label>
                <br />
                <input
                    type="text"
                    value={department}
                    onChange={(event) =>
                        setDepartment(event.target.value)
                    }
                    required
                />

                <br /><br />

                <label>IP Address</label>
                <br />
                <input
                    type="text"
                    placeholder="192.168.1.10"
                    value={ipAddress}
                    onChange={(event) =>
                        setIpAddress(event.target.value)
                    }
                    required
                />

                <br /><br />

                <button type="submit">
                    Add Device
                </button>

            </form>
        </div>
    );
}

export default AddDevice;