let connection;

const setupInput = (conn) => {
  connection = conn; 
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', (data) =>  handleUserInput(data, connection));
  return stdin;
}

const handleUserInput = (data, conn) => {
  
  // if ctrl + c is pressed the program exits
  if (data === '\u0003') {
    process.exit();  
  }

  // if 'a' or 'A' is pressed
   if (data === '\u0061' || data === '\u0041') {
    conn.write('Move: left');
  }

  // if 'w' or 'W' is pressed
  if (data === '\u0077' || data === '\u0057') {
    conn.write('Move: up');
  }

  // if 's' or 'S' is pressed
  if (data === '\u0073' || data === '\u0053') {
    conn.write('Move: down');
  }

  // if 'd' or 'D' is pressed
  if (data === '\u0064' || data === '\u0044') {
    conn.write('Move: right');
  }
};

module.exports = setupInput;
