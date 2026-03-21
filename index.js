const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');

async function start() {
    const { state, saveCreds } = await useMultiFileAuthState('auth');

    const sock = makeWASocket({ auth: state });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', ({ connection, qr }) => {
        if (qr) {
            console.log('QR:');
            qrcode.generate(qr, { small: true });
        }

        if (connection === 'open') {
            console.log('Bot bağlandı ✅');
        }

        if (connection === 'close') {
            console.log('Bağlantı kapandı');
        }
    });
}

start();
