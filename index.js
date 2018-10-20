require("process");

var old;
var stdin = process.openStdin();

stdin.addListener("data", (d) => {
    var string = d.toString().trim();
    var nString = "";

    string = string.split(" ");

    string.forEach(element => {
        nString = nString + "[" + element + "]";
    });
    if (old !== undefined) {
        nString = "[" + old + "]" + nString;
    }
    console.log(nString);
    old = nString;
  });