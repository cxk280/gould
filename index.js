const io          = require('socket.io')(server);
const util        = require('util');
const fs          = require('fs');

const log_file    = fs.createWriteStream('/temp.log');
const log_stdout  = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

io.on('connection', function(socket){
  fs.watch('./temp.log',function(event,file) {
    fs.readFile('./temp.log', "utf-8", function (err, data) {
      if (err) throw err;
      socket.emit('console-data', data);
    });
  });
});
