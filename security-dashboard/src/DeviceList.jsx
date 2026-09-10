function DeviceList({ devices }) {
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
                            Antivirus: {device.antivirus ? "Protected" : "Not Protected"}
                        </p>

                        <p>
                            Firewall: {device.firewall ? "Enabled" : "Disabled"}
                        </p>

                        <p>
                            Backup: {device.backup ? "Successful" : "Not Available"}
                        </p>

                        <p>
                            Status: {secure ? "Secure" : "At Risk"}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default DeviceList;