const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT|| 3000;
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World from Azure Node.js App!',
    status: 'Success'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});