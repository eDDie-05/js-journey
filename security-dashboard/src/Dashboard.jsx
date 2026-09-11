function Dashboard({ devices, securityPolicy }) {

    const totalDevices = devices.length;

    const secureDevices = devices.filter(device => {

        const secure =
            (!securityPolicy.antivirusRequired ||
                device.antivirus) &&
            (!securityPolicy.firewallRequired ||
                device.firewall) &&
            (!securityPolicy.backupRequired ||
                device.backup);

        return secure;

    }).length;

    const atRiskDevices =
        totalDevices - secureDevices;

    const onlineDevices = devices.filter(
        device => device.online
    ).length;

    const offlineDevices = devices.filter(
        device => !device.online
    ).length;

    const protectionRate =
        totalDevices === 0
            ? 0
            : Math.round(
                (secureDevices / totalDevices) * 100
            );

    return (
        <div>

            <h2>Security Dashboard</h2>

            <div className="dashboard">

                <div className="card">
                    <h3>Total Devices</h3>
                    <p>{totalDevices}</p>
                </div>

                <div className="card">
                    <h3>Secure Devices</h3>
                    <p>{secureDevices}</p>
                </div>

                <div className="card">
                    <h3>At Risk Devices</h3>
                    <p>{atRiskDevices}</p>
                </div>

                <div className="card">
                    <h3>Protection Rate</h3>
                    <p>{protectionRate}%</p>
                </div>

                <div className="card">
                    <h3>Online Devices</h3>
                    <p>{onlineDevices}</p>
                </div>

                <div className="card">
                    <h3>Offline Devices</h3>
                    <p>{offlineDevices}</p>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;