function SecurityAlerts({ devices, securityPolicy }) {

    const atRiskDevices = devices.filter(device => {

        const secure =
            (!securityPolicy.antivirusRequired ||
                device.antivirus) &&
            (!securityPolicy.firewallRequired ||
                device.firewall) &&
            (!securityPolicy.backupRequired ||
                device.backup);

        return !secure;
    });

    return (
        <div>

            <h2>Security Alerts</h2>

            {atRiskDevices.length === 0 ? (

                <div className="no-alerts">
                    <h3>✅ No Security Alerts</h3>
                    <p>
                        All devices are currently following
                        the company security policy.
                    </p>
                </div>

            ) : (

                <div className="alert-list">

                    {atRiskDevices.map(device => {

                        return (
                            <div
                                className="alert-card"
                                key={device.id}
                            >

                                <h3>
                                    ⚠️ {device.name}
                                </h3>

                                <p>
                                    This device does not meet
                                    the company security policy.
                                </p>

                                {securityPolicy.antivirusRequired &&
                                    !device.antivirus && (
                                        <p>
                                            ❌ Antivirus is not protected
                                        </p>
                                    )
                                }

                                {securityPolicy.firewallRequired &&
                                    !device.firewall && (
                                        <p>
                                            ❌ Firewall is disabled
                                        </p>
                                    )
                                }

                                {securityPolicy.backupRequired &&
                                    !device.backup && (
                                        <p>
                                            ❌ Backup is not available
                                        </p>
                                    )
                                }

                            </div>
                        );

                    })}

                </div>

            )}

        </div>
    );
}

export default SecurityAlerts;