const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3002;

app.use(cors())


app.get('/device', async (req, res) => {
    let { ise_id } = req.query;

    let xml=`<?xml version="1.0" encoding="UTF-8"?><systemVariables><systemVariable name="STATUS_BESUCH" variable="0" value="true" value_list="" value_text="" ise_id="${ise_id}" min="" max="" unit="" type="2" subtype="2" timestamp="1701954469" value_name_0="nein" value_name_1="ja"/></systemVariables>`
    res.send(xml);
});

app.get('/devices', async (req, res) => {
    res.send(JSON.stringify([
        {'device_name': 'Besuch', 'device_ise_id': '51292'},
        {'device_name': '+30 min', 'device_ise_id': '57195'}
    ]))
})

app.get('/', async (req, res) => {
    res.send('K');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});