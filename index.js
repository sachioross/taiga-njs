var https = require('https');

var Taiga = function(authToken) {
  this.authToken = authToken;
}

Taiga.prototype._createHttpOptions = function(path, method) {

  return {
    hostname: "api.taiga.io",
    method: method,
    path: path,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authToken
    }
  }
}

Taiga.prototype.listAllProjects = function() {
    var opts = this._createHttpOptions("/api/v1/projects", 'GET');

    var req = https.request(opts, function(res) {
      var resMsg = '';

      res.on('data', function(data){
         resMsg += data;
      })

      res.on('end', function() {
        console.log(resMsg);
      })
    });

    req.end();
}


Taiga.prototype.listProjectById = function(id) {
  var opts = this._createHttpOptions("/api/v1/projects/" + id, 'GET');

  var req = https.request(opts, function(res) {
    var resMsg = '';

    res.on('data', function(data){
      resMsg += data;
    })

    res.on('end', function() {
      console.log(resMsg);
    })
  });

  req.end();
}

Taiga.prototype.createIssue = function(issue) {

  var opts = this._createHttpOptions("/api/v1/issues", 'POST');

  issue.type = 71954;
  issue.severity = 119852;
  issue.priority = 71928;
  issue.status = 167823;

  var req = https.request(opts, function(res) {
    var resMsg = '';

    res.on('data', function(data){
      resMsg += data;
    })

    res.on('end', function() {
      console.log(resMsg);
    })
  });

  req.write(JSON.stringify(issue));
  req.end();
}

module.exports = {
  Taiga: Taiga
}
