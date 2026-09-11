function Sidebar({ page, setPage, userRole }) {

    function goToPage(selectedPage) {
        setPage(selectedPage);
    }

    return (
        <div className="sidebar">

            <h2>IT Security</h2>

            <button
                className={page === "dashboard" ? "active" : ""}
                onClick={() => goToPage("dashboard")}
            >
                📊 Dashboard
            </button>

            <button
                className={page === "devices" ? "active" : ""}
                onClick={() => goToPage("devices")}
            >
                🖥️ Devices
            </button>

            <button
                className={page === "alerts" ? "active" : ""}
                onClick={() => goToPage("alerts")}
            >
                🚨 Security Alerts
            </button>

            {userRole === "Administrator" && (

                <button
                    className={page === "users" ? "active" : ""}
                    onClick={() => goToPage("users")}
                >
                    👥 Users
                </button>

            )}

            {(userRole === "Administrator" ||
                userRole === "IT Manager") && (

                <button
                    className={page === "settings" ? "active" : ""}
                    onClick={() => goToPage("settings")}
                >
                    ⚙️ Settings
                </button>

            )}

        </div>
    );
}

export default Sidebar;