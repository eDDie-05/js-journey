const { Pool } = require("pg");

const pool = new Pool({
    user: "georgemollel",
    host: "localhost",
    database: "security_system",
    password: "",
    port: 5432
});

module.exports = pool;