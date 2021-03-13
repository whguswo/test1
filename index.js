const express = require('express')
const fs = require('fs/promises')
app = express();

app.use('/public', express.static('./data'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: './view'
    })
})

app.listen(3000, () => {
    console.log('Server Running')
})