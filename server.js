import path from 'path';
import express from 'express';
import detect from 'detect-port';

function loadDevServer(port) {
  const app = express();
  const host = process.env.HOST || 'localhost';

  app.use(express.static(path.join(__dirname, 'public')));
  app.listen(port, err => {
    if (err) console.error(`Error: ${err}`);

    console.info(`Server Bootstrap Successful! Open http://${host}:${port} to check.`);
  });
}

detect(4000, (error, port) => {
  if (error) throw new Error(error);

  loadDevServer(port);
});
