import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback: serve index.html for all non-file routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

function tryListen(p) {
  const server = app.listen(p, () => {
    console.log(`dbxedm app running at http://localhost:${p}`);
  });
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && p < 8010) {
      console.warn(`Port ${p} in use, trying ${p + 1}...`);
      tryListen(p + 1);
    } else {
      throw err;
    }
  });
}
tryListen(port);
