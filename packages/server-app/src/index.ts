import express from 'express';
import path from 'path';
import rewrite from 'express-urlrewrite';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rewrite('/assets/*', '/client-app-1/assets/$1'));

app.use(
  '/client-app-1',
  express.static(path.join(__dirname, '../../client-app-1/dist'))
);

app.get('/client-app-1', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client-app-1/dist/index.html'));
});

app.get('/client-app-2', (req, res) => {
  res.send('Hello from Client App 2');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
