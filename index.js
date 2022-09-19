const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")

import quotes from "quotes.json"

const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  const id = Math.floor(Math.random() * quotes.length)
  res.send(quotes)
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})