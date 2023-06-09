const express = require('express')
const cors = require('cors')
const db = require('./db')
const { body, validationResult } = require('express-validator');

const app = express()
app.use(express.json())
app.use(cors())


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})

app.get("/messages", (req, res) => {
    // Get's last 10 messages from DB
    const q = "SELECT * FROM messages ORDER BY time DESC LIMIT 10"
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    })
})

app.post("/send", [
    body('name').notEmpty().withMessage("This is required field").isLength({ max: 50 }).withMessage("The name shouldn't exceed 50 characters"),
    body('message').notEmpty().withMessage("This is required field").isLength({max: 255}).withMessage("The message field cannot exceed 255 characters."),
    ],(req, res) => {
    
    // Handling validation of inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Sends message to the database with values from request body.
    const q = "INSERT INTO messages (`name`, `message`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.message
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(201).json("Feedback has been posted")
    })
})