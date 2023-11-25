const express = require('express');
const app = express();
const port = 5000; // Use a port different from the React app

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
