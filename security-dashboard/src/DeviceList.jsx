import { useState } from "react";

function DeviceList({
    devices,
    setDevices,
    securityPolicy,
    userRole
}) {

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [securityFilter, setSecurityFilter] = useState("all");
    const [departmentFilter, setDepartmentFilter] = useState("all");

    const [editingDevice, setEditingDevice] = useState(null);


    function isDeviceSecure(device) {

        return (
            (!securityPolicy.antivirusRequired ||
                device.antivirus) &&

            (!securityPolicy.firewallRequired ||
                device.firewall) &&

            (!securityPolicy.backupRequired ||
                device.backup)
        );
    }


    const filteredDevices = devices.filter(device => {

        const matchesSearch =
            device.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            device.employee
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchesStatus =
            statusFilter === "all" ||

            (statusFilter === "online" &&
                device.online) ||

            (statusFilter === "offline" &&
                !device.online);


        const secure = isDeviceSecure(device);

        const matchesSecurity =
            securityFilter === "all" ||

            (securityFilter === "secure" &&
                secure) ||

            (securityFilter === "risk" &&
                !secure);


        const matchesDepartment =
            departmentFilter === "all" ||

            device.department === departmentFilter;


        return (
            matchesSearch &&
            matchesStatus &&
            matchesSecurity &&
            matchesDepartment
        );

    });


    async function toggleSecurity(
        id,
        setting
    ) {

        const device = devices.find(
            device => device.id === id
        );

        if (!device) {
            return;
        }


        const updatedDevice = {
            name: device.name,
            operatingSystem:
                device.operatingSystem ||
                device.operating_system,
            employee: device.employee,
            department: device.department,
            ipAddress:
                device.ipAddress ||
                device.ip_address,
            antivirus: device.antivirus,
            firewall: device.firewall,
            backup: device.backup,
            online: device.online
        };


        updatedDevice[setting] =
            !updatedDevice[setting];


        try {

            const response = await fetch(
                `http://localhost:5000/api/devices/${id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify(
                        updatedDevice
                    )
                }
            );


            if (!response.ok) {
                throw new Error(
                    "Failed to update device"
                );
            }


            const savedDevice =
                await response.json();


            setDevices(previousDevices =>
                previousDevices.map(device =>
                    device.id === id
                        ? savedDevice
                        : device
                )
            );


        } catch (error) {

            console.error(error);

            alert(
                "Failed to update device."
            );

        }

    }


    async function toggleOnline(id) {

        const device = devices.find(
            device => device.id === id
        );

        if (!device) {
            return;
        }


        const updatedDevice = {
            name: device.name,
            operatingSystem:
                device.operatingSystem ||
                device.operating_system,
            employee: device.employee,
            department: device.department,
            ipAddress:
                device.ipAddress ||
                device.ip_address,
            antivirus: device.antivirus,
            firewall: device.firewall,
            backup: device.backup,
            online: !device.online
        };


        try {

            const response = await fetch(
                `http://localhost:5000/api/devices/${id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify(
                        updatedDevice
                    )
                }
            );


            if (!response.ok) {
                throw new Error(
                    "Failed to update device"
                );
            }


            const savedDevice =
                await response.json();


            setDevices(previousDevices =>
                previousDevices.map(device =>
                    device.id === id
                        ? savedDevice
                        : device
                )
            );


        } catch (error) {

            console.error(error);

            alert(
                "Failed to update device."
            );

        }

    }


    function startEdit(device) {

        setEditingDevice({
            ...device,

            operatingSystem:
                device.operatingSystem ||
                device.operating_system,

            ipAddress:
                device.ipAddress ||
                device.ip_address
        });

    }


    function cancelEdit() {

        setEditingDevice(null);

    }


    async function saveEdit(event) {

        event.preventDefault();


        try {

            const response = await fetch(
                `http://localhost:5000/api/devices/${editingDevice.id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify(
                        editingDevice
                    )
                }
            );


            if (!response.ok) {
                throw new Error(
                    "Failed to update device"
                );
            }


            const savedDevice =
                await response.json();


            setDevices(previousDevices =>
                previousDevices.map(device =>
                    device.id === savedDevice.id
                        ? savedDevice
                        : device
                )
            );


            setEditingDevice(null);


            alert(
                "Device updated successfully!"
            );


        } catch (error) {

            console.error(error);

            alert(
                "Failed to update device."
            );

        }

    }


    async function deleteDevice(id) {

        const confirmed = window.confirm(
            "Are you sure you want to delete this device?"
        );


        if (!confirmed) {
            return;
        }


        try {

            const response = await fetch(
                `http://localhost:5000/api/devices/${id}`,
                {
                    method: "DELETE"
                }
            );


            if (!response.ok) {
                throw new Error(
                    "Failed to delete device"
                );
            }


            setDevices(previousDevices =>
                previousDevices.filter(
                    device => device.id !== id
                )
            );


            alert(
                "Device deleted successfully!"
            );


        } catch (error) {

            console.error(error);

            alert(
                "Failed to delete device."
            );

        }

    }


    return (

        <div className="device-list">

            <h2>Devices</h2>


            <div className="filters">

                <input
                    type="text"
                    placeholder="Search device or employee..."
                    value={search}
                    onChange={event =>
                        setSearch(event.target.value)
                    }
                />


                <select
                    value={statusFilter}
                    onChange={event =>
                        setStatusFilter(
                            event.target.value
                        )
                    }
                >
                    <option value="all">
                        All Status
                    </option>

                    <option value="online">
                        Online
                    </option>

                    <option value="offline">
                        Offline
                    </option>
                </select>


                <select
                    value={securityFilter}
                    onChange={event =>
                        setSecurityFilter(
                            event.target.value
                        )
                    }
                >
                    <option value="all">
                        All Security
                    </option>

                    <option value="secure">
                        Secure
                    </option>

                    <option value="risk">
                        At Risk
                    </option>
                </select>


                <select
                    value={departmentFilter}
                    onChange={event =>
                        setDepartmentFilter(
                            event.target.value
                        )
                    }
                >
                    <option value="all">
                        All Departments
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

            </div>


            {filteredDevices.length === 0 ? (

                <p>
                    No devices found.
                </p>

            ) : (

                <div className="devices-grid">

                    {filteredDevices.map(device => {

                        const secure =
                            isDeviceSecure(device);


                        return (

                            <div
                                className="device-card"
                                key={device.id}
                            >

                                <h3>
                                    🖥️ {device.name}
                                </h3>


                                <p>
                                    <strong>
                                        Employee:
                                    </strong>{" "}
                                    {device.employee}
                                </p>


                                <p>
                                    <strong>
                                        Department:
                                    </strong>{" "}
                                    {device.department}
                                </p>


                                <p>
                                    <strong>
                                        Operating System:
                                    </strong>{" "}
                                    {device.operatingSystem ||
                                        device.operating_system}
                                </p>


                                <p>
                                    <strong>
                                        IP Address:
                                    </strong>{" "}
                                    {device.ipAddress ||
                                        device.ip_address}
                                </p>


                                <p>
                                    <strong>
                                        Status:
                                    </strong>{" "}

                                    {device.online
                                        ? "🟢 Online"
                                        : "🔴 Offline"}
                                </p>


                                <p>
                                    <strong>
                                        Security:
                                    </strong>{" "}

                                    {secure
                                        ? "🟢 Secure"
                                        : "🔴 At Risk"}
                                </p>


                                <hr />


                                <p>
                                    Antivirus:{" "}

                                    {device.antivirus
                                        ? "✅"
                                        : "❌"}

                                    <button
                                        onClick={() =>
                                            toggleSecurity(
                                                device.id,
                                                "antivirus"
                                            )
                                        }
                                        disabled={
                                            userRole ===
                                            "IT Staff"
                                        }
                                    >
                                        Toggle
                                    </button>
                                </p>


                                <p>
                                    Firewall:{" "}

                                    {device.firewall
                                        ? "✅"
                                        : "❌"}

                                    <button
                                        onClick={() =>
                                            toggleSecurity(
                                                device.id,
                                                "firewall"
                                            )
                                        }
                                        disabled={
                                            userRole ===
                                            "IT Staff"
                                        }
                                    >
                                        Toggle
                                    </button>
                                </p>


                                <p>
                                    Backup:{" "}

                                    {device.backup
                                        ? "✅"
                                        : "❌"}

                                    <button
                                        onClick={() =>
                                            toggleSecurity(
                                                device.id,
                                                "backup"
                                            )
                                        }
                                        disabled={
                                            userRole ===
                                            "IT Staff"
                                        }
                                    >
                                        Toggle
                                    </button>
                                </p>


                                <button
                                    onClick={() =>
                                        toggleOnline(
                                            device.id
                                        )
                                    }
                                    disabled={
                                        userRole ===
                                        "IT Staff"
                                    }
                                >
                                    {device.online
                                        ? "Set Offline"
                                        : "Set Online"}
                                </button>


                                {(userRole ===
                                    "Administrator" ||
                                    userRole ===
                                    "IT Manager") && (

                                    <div>

                                        <button
                                            onClick={() =>
                                                startEdit(
                                                    device
                                                )
                                            }
                                        >
                                            ✏️ Edit
                                        </button>


                                        <button
                                            onClick={() =>
                                                deleteDevice(
                                                    device.id
                                                )
                                            }
                                        >
                                            🗑️ Delete
                                        </button>

                                    </div>

                                )}

                            </div>

                        );

                    })}

                </div>

            )}


            {editingDevice && (

                <div className="edit-form">

                    <h2>
                        Edit Device
                    </h2>


                    <form onSubmit={saveEdit}>

                        <label>
                            Device Name
                        </label>

                        <input
                            type="text"
                            value={editingDevice.name}
                            onChange={event =>
                                setEditingDevice({
                                    ...editingDevice,
                                    name:
                                        event.target.value
                                })
                            }
                            required
                        />


                        <label>
                            Operating System
                        </label>

                        <input
                            type="text"
                            value={
                                editingDevice.operatingSystem
                            }
                            onChange={event =>
                                setEditingDevice({
                                    ...editingDevice,
                                    operatingSystem:
                                        event.target.value
                                })
                            }
                            required
                        />


                        <label>
                            Employee
                        </label>

                        <input
                            type="text"
                            value={
                                editingDevice.employee
                            }
                            onChange={event =>
                                setEditingDevice({
                                    ...editingDevice,
                                    employee:
                                        event.target.value
                                })
                            }
                            required
                        />


                        <label>
                            Department
                        </label>

                        <select
                            value={
                                editingDevice.department
                            }
                            onChange={event =>
                                setEditingDevice({
                                    ...editingDevice,
                                    department:
                                        event.target.value
                                })
                            }
                            required
                        >
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


                        <label>
                            IP Address
                        </label>

                        <input
                            type="text"
                            value={
                                editingDevice.ipAddress
                            }
                            onChange={event =>
                                setEditingDevice({
                                    ...editingDevice,
                                    ipAddress:
                                        event.target.value
                                })
                            }
                            required
                        />


                        <br />
                        <br />


                        <button type="submit">
                            Save Changes
                        </button>


                        <button
                            type="button"
                            onClick={cancelEdit}
                        >
                            Cancel
                        </button>

                    </form>

                </div>

            )}

        </div>

    );

}


export default DeviceList;