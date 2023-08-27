'use strict'

const express = require('express')
const port = 3000


const app = express()

app.use(express.json())

app.post('/dialogflow', async (req, res) => {
  res.send({
    fulfillmentMessages: [
      {
        text: {
          text: [
            req.body.queryResult.queryText
          ]
        }
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
