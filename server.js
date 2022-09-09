const routes = require('./routes');
const db = require('./config/connection');
const express = require('express');

const PORT = 3001 || process.env.PORT;
const app = express();

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running ${PORT}!`);
  });
});
