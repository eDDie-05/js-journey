import { useState } from "react";
import "./App.css";

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AddDevice from "./AddDevice";
import DeviceList from "./DeviceList";
import SecurityAlerts from "./SecurityAlerts";
import SecuritySettings from "./SecuritySettings";

function App() {

    const [devices, setDevices] = useState([]);

    const [page, setPage] = useState("dashboard");

    const [securityPolicy, setSecurityPolicy] = useState({
        antivirusRequired: true,
        firewallRequired: true,
        backupRequired: true
    });

    return (
        <div className="app">

            <Sidebar
                page={page}
                setPage={setPage}
            />

            <main className="main-content">

                <h1>Company Security System</h1>

                {/* Dashboard */}

                {page === "dashboard" && (
                    <Dashboard
                        devices={devices}
                        securityPolicy={securityPolicy}
                    />
                )}

                {/* Devices */}

                {page === "devices" && (
                    <>
                        <AddDevice
                            setDevices={setDevices}
                        />

                        <DeviceList
                            devices={devices}
                            setDevices={setDevices}
                            securityPolicy={securityPolicy}
                        />
                    </>
                )}

                {/* Security Alerts */}

                {page === "alerts" && (
                    <SecurityAlerts
                        devices={devices}
                        securityPolicy={securityPolicy}
                    />
                )}

                {/* Settings */}

                {page === "settings" && (
                    <SecuritySettings
                        securityPolicy={securityPolicy}
                        setSecurityPolicy={setSecurityPolicy}
                    />
                )}

            </main>

        </div>
    );
}

export default App;