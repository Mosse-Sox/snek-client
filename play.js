// const net = require('net');
const connect = require('./client');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};

setupInput();

console.log('Connecting...');
connect();