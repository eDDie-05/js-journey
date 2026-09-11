import { useState } from "react";

function Login({ setCurrentUser }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    function handleLogin(event) {

        event.preventDefault();

        setError("");

        /*
            Demo accounts for learning.

            Administrator:
            admin@company.com
            admin123

            IT Manager:
            manager@company.com
            manager123

            IT Staff:
            staff@company.com
            staff123
        */

        if (
            email === "admin@company.com" &&
            password === "admin123"
        ) {

            setCurrentUser({
                name: "System Administrator",
                email: email,
                role: "Administrator"
            });

            return;
        }

        if (
            email === "manager@company.com" &&
            password === "manager123"
        ) {

            setCurrentUser({
                name: "IT Manager",
                email: email,
                role: "IT Manager"
            });

            return;
        }

        if (
            email === "staff@company.com" &&
            password === "staff123"
        ) {

            setCurrentUser({
                name: "IT Staff",
                email: email,
                role: "IT Staff"
            });

            return;
        }

        setError("Invalid email or password.");
    }

    return (
        <div className="login-page">

            <div className="login-card">

                <h1>
                    IT Security
                </h1>

                <h2>
                    Login
                </h2>

                <p>
                    Company Security Management System
                </p>

                <form onSubmit={handleLogin}>

                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                        required
                    />

                    <br />

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                        required
                    />

                    {error && (
                        <p className="login-error">
                            ❌ {error}
                        </p>
                    )}

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;