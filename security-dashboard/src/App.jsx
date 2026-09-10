import { useState } from "react";

import SecurityStatus from "./SecurityStatus";
import DeviceStatus from "./DeviceStatus";
import SecurityChecker from "./SecurityChecker";
import AddDevice from "./AddDevice";
import DeviceList from "./DeviceList";

function App() {

    const [devices, setDevices] = useState([]);

    return (
        <div>
            <h1>Company Security System</h1>

            <SecurityStatus />

            <DeviceStatus
                online={15}
                offline={3}
                total={18}
            />

            <SecurityChecker />

            <AddDevice setDevices={setDevices} />

            <DeviceList devices={devices} />

        </div>
    );
}

export default App;