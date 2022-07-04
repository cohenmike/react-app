const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

app.get('/api', function (req, res) {
  res.status(200).send({ message: `Hello World ${new Date()}`});
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});