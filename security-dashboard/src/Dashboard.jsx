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

        </div>
    </div>
);