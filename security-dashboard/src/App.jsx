import { useEffect, useState } from "react";
import "./App.css";

import Login from "./Login";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import AddDevice from "./AddDevice";
import DeviceList from "./DeviceList";
import SecurityAlerts from "./SecurityAlerts";
import SecuritySettings from "./SecuritySettings";
import Users from "./Users";

import {
    initialSecurityPolicy
} from "./data/initialData";


function App() {

    const [devices, setDevices] = useState([]);

    const [page, setPage] = useState("dashboard");

    const [currentUser, setCurrentUser] = useState(null);

    const [securityPolicy, setSecurityPolicy] =
        useState(initialSecurityPolicy);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        fetch("http://localhost:5000/api/devices")

            .then(response => response.json())

            .then(data => {

                setDevices(data);

                setLoading(false);

            })

            .catch(error => {

                console.error(
                    "Error connecting to backend:",
                    error
                );

                setLoading(false);

            });

    }, []);


    if (!currentUser) {

        return (
            <Login
                setCurrentUser={setCurrentUser}
            />
        );
    }


    function logout() {

        setCurrentUser(null);

        setPage("dashboard");
    }


    function handlePageChange(selectedPage) {

        if (
            selectedPage === "users" &&
            currentUser.role !== "Administrator"
        ) {
            setPage("dashboard");
            return;
        }


        if (
            selectedPage === "settings" &&
            currentUser.role !== "Administrator" &&
            currentUser.role !== "IT Manager"
        ) {
            setPage("dashboard");
            return;
        }


        setPage(selectedPage);
    }


    return (

        <div className="app">

            <Sidebar
                page={page}
                setPage={handlePageChange}
                userRole={currentUser.role}
            />


            <main className="main-content">

                <div className="top-bar">

                    <div>

                        <h1>
                            Company Security System
                        </h1>

                        <p>
                            Welcome, {currentUser.name}
                        </p>

                    </div>


                    <div className="user-info">

                        <span>
                            👤 {currentUser.role}
                        </span>

                        <button onClick={logout}>
                            Logout
                        </button>

                    </div>

                </div>


                {loading && (
                    <p>
                        Loading devices from server...
                    </p>
                )}


                {!loading &&
                    page === "dashboard" && (

                    <Dashboard
                        devices={devices}
                        securityPolicy={securityPolicy}
                    />

                )}


                {!loading &&
                    page === "devices" && (

                    <>

                        {(currentUser.role === "Administrator" ||
                            currentUser.role === "IT Manager") && (

                            <AddDevice
                                setDevices={setDevices}
                            />

                        )}


                        <DeviceList
                            devices={devices}
                            setDevices={setDevices}
                            securityPolicy={securityPolicy}
                            userRole={currentUser.role}
                        />

                    </>

                )}


                {!loading &&
                    page === "alerts" && (

                    <SecurityAlerts
                        devices={devices}
                        securityPolicy={securityPolicy}
                    />

                )}


                {page === "users" &&
                    currentUser.role === "Administrator" && (

                    <Users
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                    />

                )}


                {page === "settings" &&
                    (
                        currentUser.role === "Administrator" ||
                        currentUser.role === "IT Manager"
                    ) && (

                    <SecuritySettings
                        securityPolicy={securityPolicy}
                        setSecurityPolicy={
                            setSecurityPolicy
                        }
                    />

                )}

            </main>

        </div>
    );
}


export default App;