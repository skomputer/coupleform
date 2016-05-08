var fs = require("fs");
var PeerServer = require("peer").PeerServer;

var server = PeerServer({ 
  port: 9000, 
  ssl: {
    key: fs.readFileSync("/etc/apache2/server.key"),
    cert: fs.readFileSync("/etc/apache2/server.crt")
  }
});

server.on("connection", function(id) { 
  console.log("peer connected", id);
});

server.on("disconnect", function(id) { 
  console.log("peer disconnected", id);
});