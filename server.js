const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

// create our app
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express is up on port ${port}`);
});
