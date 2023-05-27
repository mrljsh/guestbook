const express = require('express')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "guestbook"
})

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})

app.use(express.json())

app.get("/messages", (req, res) => {
    // Get's last 10 messages from DB
    const q = "SELECT * FROM messages ORDER BY time DESC LIMIT 10"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/send", (req, res) => {
    // Sends message to the database with values from request body.
    const q = "INSERT INTO messages (`name`, `message`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.message
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.status(200).json("Feedback has been posted")
    })
})