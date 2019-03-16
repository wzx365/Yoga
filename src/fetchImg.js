const request = require('request')
const fs = require('fs')
const urls = require('./urls/imgs')

urls.forEach(item => {
    let { url, name } = item
    url && request(url).pipe(fs.createWriteStream(`dist/imgs/${name}.png`)) 
})