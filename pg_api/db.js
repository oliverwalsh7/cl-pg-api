const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "oliver",
    database: "linktopia_db",
    host: "postgres://ujbgxlwy:Seo5GSBlI3W7rZdgOPems-QTC6kZ9IbN@ziggy.db.elephantsql.com:5432/ujbgxlwy"
})

module.exports = pool;