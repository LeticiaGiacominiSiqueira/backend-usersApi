const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
  { id: 3, name: 'Charlie', email: 'charlie@mail.com' },
  { id: 4, name: 'David', email: 'david@mail.com' },
  { id: 5, name: 'Eve', email: 'eve@mail.com' },
  { id: 6, name: 'Frank', email: 'frank@mail.com' },
  { id: 7, name: 'Grace', email: 'grace@mail.com' },
  { id: 8, name: 'Hannah', email: 'hannah@mail.com' },
  { id: 9, name: 'Ian', email: 'ian@mail.com' },
  { id: 10, name: 'Jack', email: 'jack@mail.com' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
