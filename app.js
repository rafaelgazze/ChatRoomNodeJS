var app = require('./config/server');



var server = app.listen(8080,function(){
    console.log('Servidor online');
});

var io = require('socket.io').listen(server);

app.set('io', io);

//criar conexão websocket

io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect',function(){
        console.log('Usuario desconectou');
    });
});
