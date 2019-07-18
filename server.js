const express = require('express'),
  connectDB = require('./config/db');

const app = express();

//Connect to database.
connectDB();

app.get('/', (req, res) => res.send('API is running.'));

//Define routes.
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`A server has been started on PORT ${PORT}!`)
);
