import { useState } from "react";

function SecuritySettings() {
    const [antivirusRequired, setAntivirusRequired] = useState(true);
    const [firewallRequired, setFirewallRequired] = useState(true);
    const [backupRequired, setBackupRequired] = useState(true);

    return (
        <div>
            <h2>Security Settings</h2>

            <div className="settings-card">

                <div className="setting">
                    <div>
                        <h3>Antivirus Required</h3>
                        <p>
                            Devices must have antivirus protection.
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            setAntivirusRequired(!antivirusRequired)
                        }
                    >
                        {antivirusRequired ? "Enabled" : "Disabled"}
                    </button>
                </div>

                <div className="setting">
                    <div>
                        <h3>Firewall Required</h3>
                        <p>
                            Devices must have the firewall enabled.
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            setFirewallRequired(!firewallRequired)
                        }
                    >
                        {firewallRequired ? "Enabled" : "Disabled"}
                    </button>
                </div>

                <div className="setting">
                    <div>
                        <h3>Backup Required</h3>
                        <p>
                            Devices must have a working backup.
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            setBackupRequired(!backupRequired)
                        }
                    >
                        {backupRequired ? "Enabled" : "Disabled"}
                    </button>
                </div>

            </div>
        </div>
    );
}

export default SecuritySettings;