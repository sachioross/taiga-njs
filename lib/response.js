var Response = function(type, body) {
  this.body = body;
  this.status = "success";
  this.type = type;
};

module.exports = Response;
