const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require("./routes")

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//leaving this here in case we need it, dont think so but just in case
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

  
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Ayyye API server running on port ${PORT}!`);
    })
})