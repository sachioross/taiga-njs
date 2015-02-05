var Response = require('./response.js');

var init = function(obj) {
  obj.prototype.setConfiguration = function(conf) {
    for (c in conf) {
      if (this[c]) {
        this[c] = conf[c];
      }
    }
  }

  obj.prototype._createPath = function(path) {
    return this.protocol + "://" + this.host + this.apiPath + path;
  }

  obj.prototype.post = function(path, data) {

    var self = this;

    self.baseRequest.post({url: path, formData: data},
      function(err, response, body) {
        if (err) {
          var r = new Response("error", err);
          r.status = "error";
          self.emit("error", r);
        } else {
          // TODO: This could be successfully an error, so check for that.
          self.emit("success", new Response("issue", body));
        }
      }
    );
  }

  obj.prototype.get = function(path) {

    var self = this;

    self.baseRequest.get(path,
      function(err, res, body) {
        if (err) {
          self.emit("error", err);
        } else {
          self.emit("success", new self.Response(body));
        }
      }
    );
  }


}

module.exports = {
  init: init
}
