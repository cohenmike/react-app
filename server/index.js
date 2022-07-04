const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', function (req, res) {
  res.status(200).send({ message: `Hello World ${new Date()}`});
});

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/build') });
})

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});