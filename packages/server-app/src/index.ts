import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  '/client-app-1',
  express.static(path.join(__dirname, '../../client-app-1/dist'))
);
app.get('/client-app-1', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client-app-1/dist/index.html'));
});

app.use(
  '/client-app-2',
  express.static(path.join(__dirname, '../../client-app-2/dist'))
);
app.get('/client-app-2', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client-app-2/dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
