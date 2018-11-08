 //excuchar informacion (on)
 var socket = io();
 socket.on('connect', function() {
     console.log('conectado al servidor');

 })

 socket.on('disconnect', function() {
     console.log('se perdio conexion al servidor');
 })

 //enviar información (emit)
 socket.emit('enviarMensaje', {
     usuario: 'Gabriel',
     mensaje: 'Hola Mundo'
 }, function(respuesta) {
     console.log('respuesta server:', respuesta)
 });

 //escuchar info
 socket.on('enviarMensaje', function(mensaje) {
     console.log(mensaje);
 })