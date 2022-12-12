const express = require('express')
const axios = require('axios')

const config = require('./weatherService')

const app = express()

app.get('/weather', async (req, res) => {
    const { q, lon, lat } = req.query
    const { data } = await axios.get(`${config.WEATHER_API_ENDPOINT}q=${q}&lon=${lon}&lat=${lat}`, {
        responseType: 'stream'
    })

    data.pipe(res)
})

app.get('/weather/data', async (req, res) => {
    const { lon, lat } = req.query

    const { data } = await axios.get(
        `${config.WEATHER_DATA_ENDPOINT}lon=${lon}&lat=${lat}`, {
            responseType: 'stream'
        }
    )

    data.pipe(res)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}...`))