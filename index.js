var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', socket => {
  socket.on('chatmessage', function (msg) {
    io.emit('chatmessage', msg);
  })

  // socket.on('newuser', function(name){
  //   socket.broadcast.emit('newuser', name);
  // })

  socket.on('newuser', function(name){

    io.emit('newuser', name);
  })

  socket.on('typing', function(name){
    io.emit('typing', name);
  })
  socket.on('stoptyping', function(name){
    io.emit('stoptyping', name);
  })

  socket.on('userconnected', function(name){
    socket.broadcast.emit('userconnected', name);
  })
  
});


http.listen(port, function () {
  console.log('listening on *:' + port);
});