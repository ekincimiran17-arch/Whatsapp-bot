// Bot code goes here

const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');

const app = express();
const client = new Client();

client.on('qr', (qr) => {
    // Generate and show qr code for authentication
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

app.get('/', (req, res) => {
    res.send('WhatsApp Group Auto Message Bot is running!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
