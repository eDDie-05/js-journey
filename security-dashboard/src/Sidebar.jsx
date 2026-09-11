function Sidebar({ page, setPage }) {
    return (
        <div className="sidebar">

            <h2>IT Security</h2>

            <button
                className={page === "dashboard" ? "active" : ""}
                onClick={() => setPage("dashboard")}
            >
                Dashboard
            </button>

            <button
                className={page === "devices" ? "active" : ""}
                onClick={() => setPage("devices")}
            >
                Devices
            </button>

            <button
                className={page === "alerts" ? "active" : ""}
                onClick={() => setPage("alerts")}
            >
                Security Alerts
            </button>

            <button
                className={page === "settings" ? "active" : ""}
                onClick={() => setPage("settings")}
            >
                Settings
            </button>

        </div>
    );
}

export default Sidebar;