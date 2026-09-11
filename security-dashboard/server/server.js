const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

const PORT = 5000;

app.use(cors());

app.use(express.json());


// TEST
app.get("/", (req, res) => {

    res.json({
        message: "Company Security System API is running"
    });

});


// ==============================
// DEVICES
// ==============================

// GET DEVICES
app.get("/api/devices", async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM devices ORDER BY id"
        );

        res.json(result.rows);

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});


// ADD DEVICE
app.post("/api/devices", async (req, res) => {

    try {

        const {
            name,
            operatingSystem,
            employee,
            department,
            ipAddress,
            antivirus,
            firewall,
            backup,
            online
        } = req.body;


        const result = await pool.query(
            `
            INSERT INTO devices
            (
                name,
                operating_system,
                employee,
                department,
                ip_address,
                antivirus,
                firewall,
                backup,
                online
            )
            VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
            `,
            [
                name,
                operatingSystem,
                employee,
                department,
                ipAddress,
                antivirus,
                firewall,
                backup,
                online
            ]
        );


        res.status(201).json(result.rows[0]);

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});


// EDIT DEVICE
app.put("/api/devices/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const {
            name,
            operatingSystem,
            employee,
            department,
            ipAddress,
            antivirus,
            firewall,
            backup,
            online
        } = req.body;


        const result = await pool.query(
            `
            UPDATE devices
            SET
                name = $1,
                operating_system = $2,
                employee = $3,
                department = $4,
                ip_address = $5,
                antivirus = $6,
                firewall = $7,
                backup = $8,
                online = $9
            WHERE id = $10
            RETURNING *
            `,
            [
                name,
                operatingSystem,
                employee,
                department,
                ipAddress,
                antivirus,
                firewall,
                backup,
                online,
                id
            ]
        );


        if (result.rows.length === 0) {

            return res.status(404).json({
                error: "Device not found"
            });

        }


        res.json(result.rows[0]);

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});


// DELETE DEVICE
app.delete("/api/devices/:id", async (req, res) => {

    try {

        const { id } = req.params;


        const result = await pool.query(
            `
            DELETE FROM devices
            WHERE id = $1
            RETURNING *
            `,
            [id]
        );


        if (result.rows.length === 0) {

            return res.status(404).json({
                error: "Device not found"
            });

        }


        res.json({
            message: "Device deleted successfully",
            device: result.rows[0]
        });

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});


// ==============================
// USERS
// ==============================

// GET USERS
app.get("/api/users", async (req, res) => {

    try {

        const result = await pool.query(
            "SELECT * FROM users ORDER BY id"
        );

        res.json(result.rows);

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});


// ADD USER
app.post("/api/users", async (req, res) => {

    try {

        const {
            name,
            email,
            role
        } = req.body;


        const result = await pool.query(
            `
            INSERT INTO users
            (
                name,
                email,
                role
            )
            VALUES
            ($1, $2, $3)
            RETURNING *
            `,
            [
                name,
                email,
                role
            ]
        );


        res.status(201).json(
            result.rows[0]
        );

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});


// DELETE USER
app.delete("/api/users/:id", async (req, res) => {

    try {

        const { id } = req.params;


        const result = await pool.query(
            `
            DELETE FROM users
            WHERE id = $1
            RETURNING *
            `,
            [id]
        );


        if (result.rows.length === 0) {

            return res.status(404).json({
                error: "User not found"
            });

        }


        res.json({
            message: "User deleted successfully",
            user: result.rows[0]
        });

    } catch (error) {

        console.error("Database error:", error);

        res.status(500).json({
            error: error.message
        });

    }

});


// START SERVER
app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});