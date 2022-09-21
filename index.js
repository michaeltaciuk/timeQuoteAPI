const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let quotes = [{
    "id": "1",
    "text": "Dost thou love life? Then do not squander Time; for that’s the Stuff Life is made of.",
    "name": "Benjamin Franklin"
},
{
    "id": "2",
    "text": "Continuous effort, not strength or intelligence, is the key to unlocking our potential.",
    "name": "Winston Churchill"
},
{
    "id": "3",
    "text": "Do your work, then step back. The only path to serenity.",
    "name": "Lao Tzu"
}]

app.get("/", (req, res) => {
    let id = Math.floor(Math.random()*3)
    res.json(quotes[id].text);
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})