const express = require('express')
const cors = require('cors');
const seq = require('../db/db.js');
const Artist = require('../db/models/Artist.js');
const Album = require('../db/models/Album.js');
const jams_api = require('../db/jams_api.js');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Get Artists and Albums
app.get('/artists', (req, res) => {
  jams_api.allContent().then((results) => {
    res.status(200).json(results);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
});

// Add Artist and Album
app.post('/artists', (req, res) => {
  let artist_name = req.body.artist_name;
  jams_api.addArtist(req.body).then((results) => {
    res.status(201).json(results);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});