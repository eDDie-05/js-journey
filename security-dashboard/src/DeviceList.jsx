function DeviceList({ devices, setDevices }) {

    function toggleSecurity(index, property) {

        setDevices(previousDevices =>
            previousDevices.map((device, deviceIndex) => {

                if (deviceIndex === index) {
                    return {
                        ...device,
                        [property]: !device[property]
                    };
                }

                return device;
            })
        );
    }

    return (
        <div>
            <h2>Company Devices</h2>

            {devices.map((device, index) => {

                const secure =
                    device.antivirus &&
                    device.firewall &&
                    device.backup;

                return (
                    <div key={index}>

                        <h3>{device.name}</h3>

                        <p>
                            Operating System: {device.operatingSystem}
                        </p>

                        <p>
                            Antivirus:{" "}
                            {device.antivirus
                                ? "Protected"
                                : "Not Protected"}
                        </p>

                        <button
                            onClick={() =>
                                toggleSecurity(index, "antivirus")
                            }
                        >
                            Toggle Antivirus
                        </button>

                        <p>
                            Firewall:{" "}
                            {device.firewall
                                ? "Enabled"
                                : "Disabled"}
                        </p>

                        <button
                            onClick={() =>
                                toggleSecurity(index, "firewall")
                            }
                        >
                            Toggle Firewall
                        </button>

                        <p>
                            Backup:{" "}
                            {device.backup
                                ? "Successful"
                                : "Not Available"}
                        </p>

                        <button
                            onClick={() =>
                                toggleSecurity(index, "backup")
                            }
                        >
                            Toggle Backup
                        </button>

                        <p>
                            Status:{" "}
                            {secure ? "Secure" : "At Risk"}
                        </p>

                        <hr />

                    </div>
                );
            })}
        </div>
    );
}

export default DeviceList;