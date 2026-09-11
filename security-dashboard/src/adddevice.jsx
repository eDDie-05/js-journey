import { useState } from "react";

function AddDevice({ setDevices }) {

    const [deviceName, setDeviceName] = useState("");
    const [operatingSystem, setOperatingSystem] = useState("");
    const [employee, setEmployee] = useState("");
    const [department, setDepartment] = useState("");
    const [ipAddress, setIpAddress] = useState("");


    async function handleSubmit(event) {

        event.preventDefault();


        const newDevice = {

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


        try {

            const response = await fetch(
                "http://localhost:5000/api/devices",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(newDevice)
                }
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to add device"
                );

            }


            const savedDevice = await response.json();


            setDevices(previousDevices => [
                ...previousDevices,
                savedDevice
            ]);


            setDeviceName("");

            setOperatingSystem("");

            setEmployee("");

            setDepartment("");

            setIpAddress("");


            alert("Device added successfully!");

        } catch (error) {

            console.error(error);

            alert("Failed to add device.");

        }

    }


    return (

        <div className="add-device">

            <h2>Add Device</h2>


            <form onSubmit={handleSubmit}>

                <label>
                    Device Name
                </label>

                <br />

                <input
                    type="text"
                    value={deviceName}
                    onChange={(event) =>
                        setDeviceName(event.target.value)
                    }
                    required
                />


                <br />
                <br />


                <label>
                    Operating System
                </label>

                <br />

                <input
                    type="text"
                    placeholder="Windows 11 / macOS"
                    value={operatingSystem}
                    onChange={(event) =>
                        setOperatingSystem(event.target.value)
                    }
                    required
                />


                <br />
                <br />


                <label>
                    Employee
                </label>

                <br />

                <input
                    type="text"
                    value={employee}
                    onChange={(event) =>
                        setEmployee(event.target.value)
                    }
                    required
                />


                <br />
                <br />


                <label>
                    Department
                </label>

                <br />

                <select
                    value={department}
                    onChange={(event) =>
                        setDepartment(event.target.value)
                    }
                    required
                >

                    <option value="">
                        Select Department
                    </option>

                    <option value="Management">
                        Management
                    </option>

                    <option value="IT">
                        IT
                    </option>

                    <option value="Finance">
                        Finance
                    </option>

                    <option value="HR">
                        HR
                    </option>

                    <option value="Reception">
                        Reception
                    </option>

                </select>


                <br />
                <br />


                <label>
                    IP Address
                </label>

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