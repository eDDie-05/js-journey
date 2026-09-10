function DeviceList({ devices }) {

    return (
        <div>
            <h2>Company Devices</h2>

            {devices.map((device, index) => (
                <div key={index}>
                    <h3>{device.name}</h3>
                    <p>
                        Operating System: {device.operatingSystem}
                    </p>
                </div>
            ))}

        </div>
    );
}

export default DeviceList;