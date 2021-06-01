const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const port = process.env.port || 3000
const path = require('path')
const exhandlebar = require('express-handlebars')
const db = require('../config/db')


app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, '../views'))
app.use(express.static(path.join(__dirname,'../public')))
app.engine('hbs', exhandlebar({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('signup')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/forgot', (req, res) => {
    res.render('forgot')
})

const router = require('../routes/route')
app.use('/api', router)

app.listen(port, () => {
    console.log('server just started at 3000')
})