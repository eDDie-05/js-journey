import { useEffect, useState } from "react";

function Users({ currentUser }) {

    const [users, setUsers] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const [loading, setLoading] = useState(true);


    // GET USERS FROM DATABASE
    useEffect(() => {

        fetch("http://localhost:5000/api/users")

            .then(response => {

                if (!response.ok) {
                    throw new Error("Failed to load users");
                }

                return response.json();

            })

            .then(data => {

                setUsers(data);
                setLoading(false);

            })

            .catch(error => {

                console.error(error);

                alert("Failed to load users.");

                setLoading(false);

            });

    }, []);


    // ADD USER
    async function addUser(event) {

        event.preventDefault();


        const newUser = {

            name: name,

            email: email,

            role: role

        };


        try {

            const response = await fetch(
                "http://localhost:5000/api/users",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(newUser)
                }
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to add user"
                );

            }


            const savedUser =
                await response.json();


            setUsers(previousUsers => [

                ...previousUsers,

                savedUser

            ]);


            setName("");

            setEmail("");

            setRole("");


            alert("User added successfully!");


        } catch (error) {

            console.error(error);

            alert("Failed to add user.");

        }

    }


    // DELETE USER
    async function deleteUser(id) {

        const confirmed = window.confirm(
            "Are you sure you want to delete this user?"
        );


        if (!confirmed) {
            return;
        }


        try {

            const response = await fetch(
                `http://localhost:5000/api/users/${id}`,
                {
                    method: "DELETE"
                }
            );


            if (!response.ok) {

                throw new Error(
                    "Failed to delete user"
                );

            }


            setUsers(previousUsers =>
                previousUsers.filter(
                    user => user.id !== id
                )
            );


            alert(
                "User deleted successfully!"
            );


        } catch (error) {

            console.error(error);

            alert("Failed to delete user.");

        }

    }


    return (

        <div>

            <h2>
                Users & Roles
            </h2>


            <div className="current-user-card">

                <h3>
                    Current User
                </h3>

                <p>
                    <strong>Name:</strong>{" "}
                    {currentUser.name}
                </p>

                <p>
                    <strong>Role:</strong>{" "}
                    {currentUser.role}
                </p>

            </div>


            {currentUser.role === "Administrator" && (

                <div className="user-form">

                    <h3>
                        Add User
                    </h3>


                    <form onSubmit={addUser}>

                        <label>
                            Full Name
                        </label>

                        <br />

                        <input
                            type="text"
                            placeholder="Enter full name"
                            value={name}
                            onChange={event =>
                                setName(event.target.value)
                            }
                            required
                        />


                        <br />
                        <br />


                        <label>
                            Email
                        </label>

                        <br />

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={event =>
                                setEmail(event.target.value)
                            }
                            required
                        />


                        <br />
                        <br />


                        <label>
                            Role
                        </label>

                        <br />

                        <select
                            value={role}
                            onChange={event =>
                                setRole(event.target.value)
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


                        <br />
                        <br />


                        <button type="submit">
                            Add User
                        </button>

                    </form>

                </div>

            )}


            {currentUser.role !== "Administrator" && (

                <div className="permission-message">

                    <h3>
                        🔒 Permission Restricted
                    </h3>

                    <p>
                        Only Administrators can manage
                        system users.
                    </p>

                </div>

            )}


            <div className="users-section">

                <h3>
                    System Users
                </h3>


                {loading ? (

                    <p>
                        Loading users from database...
                    </p>

                ) : users.length === 0 ? (

                    <p>
                        No users have been added yet.
                    </p>

                ) : (

                    <div className="user-list">

                        {users.map(user => (

                            <div
                                className="user-card"
                                key={user.id}
                            >

                                <h3>
                                    👤 {user.name}
                                </h3>


                                <p>
                                    <strong>
                                        Email:
                                    </strong>{" "}
                                    {user.email}
                                </p>


                                <p>
                                    <strong>
                                        Role:
                                    </strong>{" "}
                                    {user.role}
                                </p>


                                {currentUser.role ===
                                    "Administrator" && (

                                    <button
                                        onClick={() =>
                                            deleteUser(
                                                user.id
                                            )
                                        }
                                    >
                                        🗑️ Delete User
                                    </button>

                                )}

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );

}

export default Users;