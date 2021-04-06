const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('../dist/portfolio'));
app.get('*', function (request, response) {
  response.sendFile(path.resolve('../dist/portfolio/index.html'));
});

app.listen(PORT);