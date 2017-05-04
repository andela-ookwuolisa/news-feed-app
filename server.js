const express = require('express');

// create our app
let app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express is up on port 3000');
});
