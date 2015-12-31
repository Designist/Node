var exec = require('child_process').exec;

// exec("open http://www.google.com");
// exec ("open -a Terminal .");
exec("ls", function(err, stdout) {
    if (err) {
        throw err;
    }
    console.log("Listing Finished");
    console.log(stdout);
});

exec("git version", function(err, stdout) {
    if (err) {
        throw err;
    }
    console.log("Git Version Executed");
    console.log(stdout);
});
