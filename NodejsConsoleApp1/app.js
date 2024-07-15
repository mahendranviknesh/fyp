const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { backupData } = require('./backup');
const { recoverData } = require('./recovery');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes for backup and recovery
app.post('/backup', backupData);
app.get('/recover', recoverData);

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
