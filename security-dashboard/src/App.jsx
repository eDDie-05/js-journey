import SecurityStatus from "./SecurityStatus";
import DeviceStatus from "./DeviceStatus";

function App() {
    return (
        <div>
            <h1>Company Security System</h1>

            <SecurityStatus />

            <DeviceStatus
                online={8}
                offline={2}
                total={10}
            />

        </div>
    );
}

export default App;