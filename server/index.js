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

app.get("/messages", (req, res) => {
    const q = "SELECT * FROM messages LIMIT 10"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})