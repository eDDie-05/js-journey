import { useState } from "react";

function DeviceList({
    devices,
    setDevices,
    securityPolicy
}) {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    function toggleSecurity(index, property) {

        const device = filteredDevices[index];

        setDevices(previousDevices =>
            previousDevices.map(item => {

                if (item.id === device.id) {
                    return {
                        ...item,
                        [property]: !item[property]
                    };
                }

                return item;
            })
        );
    }

    function toggleOnlineStatus(index) {

        const device = filteredDevices[index];

        setDevices(previousDevices =>
            previousDevices.map(item => {

                if (item.id === device.id) {
                    return {
                        ...item,
                        online: !item.online
                    };
                }

                return item;
            })
        );
    }

    function deleteDevice(index) {

        const device = filteredDevices[index];

        const confirmed = window.confirm(
            `Are you sure you want to delete ${device.name}?`
        );

        if (confirmed) {
            setDevices(previousDevices =>
                previousDevices.filter(
                    item => item.id !== device.id
                )
            );
        }
    }

    const filteredDevices = devices.filter(device => {

        const matchesSearch = device.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const secure =
            (!securityPolicy.antivirusRequired ||
                device.antivirus) &&
            (!securityPolicy.firewallRequired ||
                device.firewall) &&
            (!securityPolicy.backupRequired ||
                device.backup);

        if (filter === "online") {
            return matchesSearch && device.online;
        }

        if (filter === "offline") {
            return matchesSearch && !device.online;
        }

        if (filter === "secure") {
            return matchesSearch && secure;
        }

        if (filter === "risk") {
            return matchesSearch && !secure;
        }

        return matchesSearch;
    });

    return (
        <div>

            <h2>Company Devices</h2>

            <input
                type="text"
                placeholder="Search device..."
                value={search}
                onChange={(event) =>
                    setSearch(event.target.value)
                }
            />

            <br />
            <br />

            <button onClick={() => setFilter("all")}>
                All
            </button>

            <button onClick={() => setFilter("online")}>
                Online
            </button>

            <button onClick={() => setFilter("offline")}>
                Offline
            </button>

            <button onClick={() => setFilter("secure")}>
                Secure
            </button>

            <button onClick={() => setFilter("risk")}>
                At Risk
            </button>

            <div className="device-list">

                {filteredDevices.map((device, index) => {

                    const secure =
                        (!securityPolicy.antivirusRequired ||
                            device.antivirus) &&
                        (!securityPolicy.firewallRequired ||
                            device.firewall) &&
                        (!securityPolicy.backupRequired ||
                            device.backup);

                    return (
                        <div
                            className="device-card"
                            key={device.id || index}
                        >

                            <h3>
                                🖥️ {device.name}
                            </h3>

                            <p>
                                <strong>Device ID:</strong>{" "}
                                {device.id}
                            </p>

                            <p>
                                <strong>Operating System:</strong>{" "}
                                {device.operatingSystem}
                            </p>

                            <p>
                                <strong>Employee:</strong>{" "}
                                {device.employee}
                            </p>

                            <p>
                                <strong>Department:</strong>{" "}
                                {device.department}
                            </p>

                            <p>
                                <strong>IP Address:</strong>{" "}
                                {device.ipAddress}
                            </p>

                            <p>
                                <strong>Connection:</strong>{" "}
                                {device.online
                                    ? "🟢 Online"
                                    : "🔴 Offline"}
                            </p>

                            <button
                                onClick={() =>
                                    toggleOnlineStatus(index)
                                }
                            >
                                {device.online
                                    ? "Set Offline"
                                    : "Set Online"}
                            </button>

                            <p>
                                <strong>Antivirus:</strong>{" "}
                                {device.antivirus
                                    ? "Protected"
                                    : "Not Protected"}
                            </p>

                            <button
                                onClick={() =>
                                    toggleSecurity(
                                        index,
                                        "antivirus"
                                    )
                                }
                            >
                                Toggle Antivirus
                            </button>

                            <p>
                                <strong>Firewall:</strong>{" "}
                                {device.firewall
                                    ? "Enabled"
                                    : "Disabled"}
                            </p>

                            <button
                                onClick={() =>
                                    toggleSecurity(
                                        index,
                                        "firewall"
                                    )
                                }
                            >
                                Toggle Firewall
                            </button>

                            <p>
                                <strong>Backup:</strong>{" "}
                                {device.backup
                                    ? "Successful"
                                    : "Not Available"}
                            </p>

                            <button
                                onClick={() =>
                                    toggleSecurity(
                                        index,
                                        "backup"
                                    )
                                }
                            >
                                Toggle Backup
                            </button>

                            <h3>
                                Status:{" "}
                                {secure
                                    ? "Secure"
                                    : "At Risk"}
                            </h3>

                            <button
                                onClick={() =>
                                    deleteDevice(index)
                                }
                            >
                                Delete Device
                            </button>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default DeviceList;