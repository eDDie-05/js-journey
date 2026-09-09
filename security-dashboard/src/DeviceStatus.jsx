function DeviceStatus(props) {
    return (
        <div>
            <h2>Device Status</h2>
            <p>Online Devices: {props.online}</p>
            <p>Offline Devices: {props.offline}</p>
            <p>Total Devices: {props.total}</p>
        </div>
    );
}

export default DeviceStatus;