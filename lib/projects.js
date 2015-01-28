var init = function(obj) {

  /* GET METHODS */

  obj.prototype.listAllProjects = function() {
    var path = this._createPath("projects");

    this.baseRequest.get(path, function(err, res, body) {
      if (!err) {
        console.log(body);
      } else {
        console.log(err);
      }
    })

  }

  obj.prototype.listProjectById = function(id) {
    var path = this._createPath("projects/" + id);
    this.baseRequest.get(path, function(err, res, body) {
      if (!err) {
        console.log(body);
      } else {
        console.log(err);
      }
    })
  }


  // /api/v1/projects/<projectId>
  // GET
  // Get project
  // /api/v1/projects/by_slug?slug=<projectSlug>
  // GET
  // Get project
  // /api/v1/projects/<projectId>/modules
  // GET
  // Get project modules configuration
  // /api/v1/projects/<projectId>/stats
  // GET
  // Get project stats
  // /api/v1/projects/<projectId>/issues_stats
  // GET
  // Get project issue stats
  // /api/v1/projects/<projectId>/issue_filters_data
  // GET
  // Get project issue filters data
  // /api/v1/projects/<projectId>/tags_colors
  // GET
  // Get project tags colors
  // /api/v1/projects/<projectId>/fans
  // GET
  // Get project fans

  // /api/v1/projects
  // POST
  // Create project
  // /api/v1/projects/<projectId>/star
  // POST
  // Add star to a project
  // /api/v1/projects/<projectId>/unstar
  // POST
  // Remove star from project
  // /api/v1/projects/<projectId>/create_template
  // POST
  // Create project template
  // /api/v1/projects/<projectId>/leave
  // POST
  // Leave project


  // /api/v1/projects/<projectId>
  // PUT
  // Modify project

  // /api/v1/projects/<projectId>
  // PATCH
  // Modify partially a project
  // /api/v1/projects/<projectId>/modules
  // PATCH
  // Modify partially a project modules configuration

  // /api/v1/projects/<projectId>
  // DELETE
  // Delete a project

  return obj;
}



module.exports = {
  init: init
}
