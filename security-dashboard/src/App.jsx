import { useState } from "react";
import Dashboard from "./Dashboard";
import AddDevice from "./AddDevice";
import DeviceList from "./DeviceList";

function App() {

    const [devices, setDevices] = useState([]);

    return (
        <div>

            <h1>Company Security System</h1>

            <Dashboard devices={devices} />

            <AddDevice setDevices={setDevices} />

            <DeviceList
                devices={devices}
                setDevices={setDevices}
            />

        </div>
    );
}

export default App;