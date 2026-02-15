const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
// This line is crucial: it serves your HTML, CSS, and JS files from the current folder
app.use(express.static(__dirname));

// Sample API Route for Department Info
app.get('/api/status', (req, res) => {
    res.json({ 
        status: "Online", 
        timestamp: new Date().toLocaleTimeString() 
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`IE Department Website running at http://localhost:${PORT}`);
});