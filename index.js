var https = require('https');
var projects = require('./lib/projects.js');
var issues = require('./lib/issues.js');
var utilities = require('./lib/utils.js');
var request = require('request');

var Client = function(authToken) {
  this.authToken = authToken;
  this.baseRequest = request.defaults({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.authToken
    }
  });
  this.protocol = 'https';
  this.host = 'api.taiga.io';
  this.apiPath = "/api/v1/";
}

Taiga = utilities.init(Client);
Taiga = projects.init(Client);
Taiga = issues.init(Client);

module.exports = {
  Client: Client
}
