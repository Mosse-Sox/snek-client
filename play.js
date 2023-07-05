const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('You are now connected to the snek server');
  });

  conn.on('data', (data) => {
    console.log(`Server: `, data);
  });

  

  conn.on('close', () => {
    console.log('Ended connection with the snek server');
  });

  return conn;
};

console.log('Connecting...');
connect();