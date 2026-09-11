function Dashboard({ devices }) {

    const totalDevices = devices.length;

    const secureDevices = devices.filter(device =>
        device.antivirus &&
        device.firewall &&
        device.backup
    ).length;

    const atRiskDevices = totalDevices - secureDevices;

    return (
        <div>

            <h2>Security Dashboard</h2>

            <div>
                <h3>Total Devices</h3>
                <p>{totalDevices}</p>
            </div>

            <div>
                <h3>Secure Devices</h3>
                <p>{secureDevices}</p>
            </div>

            <div>
                <h3>At Risk Devices</h3>
                <p>{atRiskDevices}</p>
            </div>

        </div>
    );
}

export default Dashboard;