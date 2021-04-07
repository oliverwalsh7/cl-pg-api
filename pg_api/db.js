const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "oliver",
    database: "linktopia",
    host: "localhost",
    port: "3000"
})

module.exports = pool;