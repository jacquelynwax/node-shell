Erikas-MacBook-Pro:node-shell erikaweil$ cat bash.js //concatenates the files
// console.log(Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {
    var pwd = process.argv[1];
    process.stdout.write(pwd);


  } else if (cmd === "date") {
    var date = new Date();
    process.stdout.write(date.toString());
  }

  process.stdout.write('\nprompt > ');
});



Erikas-MacBook-Pro:node-shell erikaweil$ head bash.js //outputs the first part of the files
// console.log(Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {

// console.log(Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {





Erikas-MacBook-Pro:node-shell erikaweil$ cat bash.js | head
// console.log(Object.keys(process));

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === "pwd") {