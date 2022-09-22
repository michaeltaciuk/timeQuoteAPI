const express = require('express')
const app = express()
const port = process.env.PORT || 3000

let quotes = [{
    "id": "1",
    "text": "Dost thou love life? Then do not squander Time; for that's the Stuff Life is made of.",
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
},
{
    "id": "4",
    "text": "It's not enough to be busy, so are the ants. The question is, what are we busy about?",
    "name": "Henry David Thoreau"
},
{
    "id": "5",
    "text": "The shorter way to do many things is to only do one thing at a time.",
    "name": "Wolfgang Amadeus Mozart"
},
{
    "id": "6",
    "text": "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
    "name": "Abraham Lincoln"
},
{
    "id": "7",
    "text": "Imagine how you want to feel at the end of the day. Start working towards that now.",
    "name": "Lin-Manuel Miranda"
}]

console.log(quotes.length)

app.get("/", (req, res) => {
    let id = Math.floor(Math.random()*quotes.length)
    res.json(quotes[id].text);
})

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`)
})