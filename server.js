const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // The rewire middleware - not. req.url is mutable but req.originalUrl isn't, or at least has no effect if mutated
  server.use(function(req, res, next) {
    req.url = req.originalUrl.replace('app/_next', '_next');
    next(); // be sure to let the next middleware handle the modified request.
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
