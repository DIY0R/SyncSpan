const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('Получено от клиента:', data.toString());

    socket.write('Привет, клиент!');
  });
  socket.on('connect', (connection) => {
    console.dir(connection);
  });
  socket.on('end', () => {
    console.log('Клиент отключен');
  });

  socket.on('error', (err) => {
    console.error('Ошибка соединения:', err.message);
  });
});

const port = 2000;
server.listen(port, () => {
  console.log(`TCP-сервер слушает порт ${port}`);
});
