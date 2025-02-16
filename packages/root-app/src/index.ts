import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Example route for the root application
app.get('/', (req, res) => {
    res.send('Welcome to the Root Application!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Root application is running on http://localhost:${PORT}`);
});