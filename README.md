# taiga-njs
Soon-to-be NodeJS Implementation of Taiga API

# WARNING
This is in the very initial stages of this module and will change greatly.
I am publishing this for my own use in other projects at this time and
do not offer or provide support. Please check back in a couple weeks
for a more mature offering.

**_UPDATE:_**  This is **STILL** in extremely early stages of development, but I'm figuring out a bit more about what I want this to be ;). If you have suggestions and/or ideas, please feel free to get in contact with me (check the github profile page). 

## Usage
### Initialization
Simply provide an API key for a new `Client` instance.

```
var taiga = require('taiga-njs');
var client = new taiga.Client("YOUR_API_KEY");
```

### The Objects

*Client* : the taiga client, instantiated with your API key

*Response*: The response wrapper. Has the following structure (so far): 
```
var Response = function(type, body) { 
	this.body = body; 
	this.status = "success";
	this.type = type;
};
```

### Usage
All calls to the API will return a wrapper response object in a promise that will contain the entire response in addition to a couple key helper fields. I may change the specific structure, but the concept will likely stay unless someone poses a really clear reason why this is wrong. 

#####Issues
My current focus is around the Issues portion of the Taiga API. Currently, I can create a new high-priority, very sever issue :). 

```
// taiga and client already initialized
// project id = 12345
var issue = new taiga.Issue(12345, "Issue Subject", "Issue Description");
client.createIssue(issue)
  .on("success", function(res) {
  	// do something with the response  })
  .on("error", function(res) {
  	// handle the error  });
```

... which is what I need it for right now :).
