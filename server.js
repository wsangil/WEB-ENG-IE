const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('.')); // Serves your HTML/CSS/JS files

// API Route for the department status
app.get('/api/status', (req, res) => {
    res.json({ 
        status: "Online", 
        department: "Industrial Engineering",
        message: "Welcome to the Industrial Engineering Website!"
    });
});

app.listen(PORT, () => {
    console.log(`IE Department Server running at http://localhost:${PORT}`);
});