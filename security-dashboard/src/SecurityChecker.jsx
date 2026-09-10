import { useState } from "react";

function SecurityChecker() {

    const [secure, setSecure] = useState(true);

    return (
        <div>
            <h2>Security Status</h2>

            <p>
                Status: {secure ? "Secure" : "At Risk"}
            </p>

            <button onClick={() => setSecure(!secure)}>
                Change Status
            </button>
        </div>
    );
}

export default SecurityChecker;