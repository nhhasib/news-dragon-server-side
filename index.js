const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000

app.use(cors())

const catagories = require('./data/catagories.json');
const news=require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Hello world')
});


app.get('/catagories', (req, res) => {
    res.send(catagories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})