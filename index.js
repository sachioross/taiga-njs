var https = require('https');
var projects = require('./lib/projects.js');
var issues = require('./lib/issues.js');
var utilities = require('./lib/utils.js');
var Response = require('./lib/response.js');
var request = require('request');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

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

util.inherits(Client, EventEmitter);

Taiga = utilities.init(Client);
Taiga = projects.init(Client);
Taiga = issues.init(Client);

module.exports = {
  Client: Client,
  Response: Response,
  Issue: issues.Issue
}
