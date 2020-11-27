const app = require('express')();
const cors = require('cors');
const serverHttp = require('http').createServer(app);
const io = require('socket.io')(serverHttp, { cors: { origin: '*' } });

// app.use(require('cors'));

const myMessages = [];

io.on('connection', socket => {
    socket.on('send-message', (data => {
        myMessages.push(data);
        socket.emit('text-event', myMessages);
        socket.broadcast.emit('text-event', myMessages);;
    }));
});

serverHttp.listen(5000, () => {
    console.log(`Socket server running on PORT ${5000}.`);
})
