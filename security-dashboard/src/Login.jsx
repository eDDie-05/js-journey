import { useState } from "react";

function Login({ setCurrentUser }) {

    const [email, setEmail] = useState("");

    const [role, setRole] = useState("");

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);


    async function handleLogin(event) {

        event.preventDefault();

        setError("");

        setLoading(true);


        try {

            const response = await fetch(
                "http://localhost:5000/api/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        role: role
                    })
                }
            );


            const data = await response.json();


            if (!response.ok) {

                throw new Error(
                    data.error || "Login failed"
                );

            }


            setCurrentUser({

                id: data.id,

                name: data.name,

                email: data.email,

                role: data.role

            });


        } catch (error) {

            console.error(error);

            setError(
                error.message
            );

        } finally {

            setLoading(false);

        }

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
                        onChange={event =>
                            setEmail(
                                event.target.value
                            )
                        }
                        required
                    />


                    <br />


                    <label>
                        Role
                    </label>


                    <select
                        value={role}
                        onChange={event =>
                            setRole(
                                event.target.value
                            )
                        }
                        required
                    >

                        <option value="">
                            Select Role
                        </option>

                        <option value="Administrator">
                            Administrator
                        </option>

                        <option value="IT Manager">
                            IT Manager
                        </option>

                        <option value="IT Staff">
                            IT Staff
                        </option>

                    </select>


                    {error && (

                        <p className="login-error">
                            ❌ {error}
                        </p>

                    )}


                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {loading
                            ? "Logging in..."
                            : "Login"}

                    </button>

                </form>

            </div>

        </div>

    );

}


export default Login;