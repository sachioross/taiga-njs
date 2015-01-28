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
}

module.exports = {
  init: init
}
