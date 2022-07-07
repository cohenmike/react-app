const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  res.status(200).send({ message: `Hello World ${new Date()}`});
});

const producers = [
  {
    id: 1,
    name: "Rat",
    cost: 10,
    outputPerSecond: 1,
    growthRate: 1.1
  },
  {
    id: 2,
    name: "Cat",
    cost: 100,
    outputPerSecond: 5,
    growthRate: 1.2
  },
  {
    id: 3,
    name: "Dog",
    cost: 1000,
    outputPerSecond: 50,
    growthRate: 1.3
  }
]

app.get('/api/producers', (req, res) => {
  res.status(200).send(producers);
})

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/build') });
})

const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});