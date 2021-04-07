const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json()); // req => body

//ROUTES//

// get all ssn
app.get("/linktopia", async(req, res) => {
  try {
    const { ssn } = res.body;
    const fetchSSN = await pool.query("SELECT ssn FROM linktopia ")
    res.json(fetchSSN.rows);
  } catch (err) {
    console.error(err.message)
  }
})
// get a ssn

const port = 3000;
app.listen(3000, () => {
  console.log("SERVER RUNNING AT PORT " + port );
})
