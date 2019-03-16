const request = require('request')
const fs = require('fs')
const urls = require('./urls/videos.js')

urls.forEach(item => {
    let { url, name } = item
    url && request(url).pipe(fs.createWriteStream(`dist/videos/${name}.mp4`)) 
})