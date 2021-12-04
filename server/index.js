const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/artists', (req, res) => {
    res.status(200).send('get for /artists working');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})