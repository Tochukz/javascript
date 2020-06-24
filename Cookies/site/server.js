const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});
const port = 8064;
app.listen(port, () => console.log('Server running on port %s', port));
