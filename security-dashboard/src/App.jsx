import { useState } from "react";
import AddDevice from "./AddDevice";
import DeviceList from "./DeviceList";

function App() {
    const [devices, setDevices] = useState([]);

    return (
        <div>
            <h1>Company Security System</h1>

            <AddDevice setDevices={setDevices} />

            <DeviceList devices={devices} />
        </div>
    );
}

export default App;