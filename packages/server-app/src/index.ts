import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes for serving client applications
app.get('/client-app-1', (req, res) => {
    res.send('Hello from Client App 1');
});

app.get('/client-app-2', (req, res) => {
    res.send('Hello from Client App 2');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});