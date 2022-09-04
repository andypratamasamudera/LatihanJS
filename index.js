// fungsi untuk menyambungkan/memanggil file
const express = require('express')
const home = require('./tampilan/home')
//

const app = express()

app.get('/', (req, res) => {
res.send('HELO..')
})

app.get('/about', (req, res) => {
    res.send('about')
    })

app.get('/home', (req, res) => {
    home(req, res)
    })

app.get('/profile/:name', (req, res) => {
    const name = req.params.name
    res.send('profile ' + name)
    })

app.listen(5000, () => {
console.log('server sedang berjalan..')
})