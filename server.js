const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root project folder
app.use(express.static(__dirname));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'Drax_Chat.html'));
});
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'Sign up.html'));
});
// Only start the listener when developing locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Drax AI Web App is live at: http://localhost:${PORT}`);
    });
}

// Export Express app for Vercel
module.exports = app;