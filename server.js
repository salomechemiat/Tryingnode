const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test article',
        createdAt: new Date(),
        description: 'Test description'
    }
]
res.render('articles/index' , {articles: articles})
})


app.listen(5000)