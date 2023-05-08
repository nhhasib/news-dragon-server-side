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

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const newsSelected = news.find(n => n._id === id)
    res.send(newsSelected)
})
app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const catagoriesNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(catagoriesNews)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})