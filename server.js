const express = require('express'),
  app = express();

app.get('/', (req, res) => res.send('API is running.'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`A server has been started on PORT ${PORT}!`)
);
