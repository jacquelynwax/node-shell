var pwd = function() {
    var pwd = process.argv[1];
    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
}

var fs = require("fs");

var ls = function() {
  fs.readdir(".", function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
}






module.exports = {pwd, ls}
