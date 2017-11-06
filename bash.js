// console.log(Object.keys(process));

// Output a prompt
var commands = require('./commands.js')

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
    if (cmd === "pwd") {
      commands.pwd();
    } else if (cmd === "date") {
      var date = new Date();
      process.stdout.write(date.toString());
      process.stdout.write('\nprompt > ');
    } else if (cmd === "ls") {
      commands.ls();
    }
});
