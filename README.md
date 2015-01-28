# taiga-njs
Soon-to-be NodeJS Implementation of Taiga API

# WARNING
This is in the very initial stages of this module and will change greatly.
I am publishing this for my own use in other projects at this time and
do not offer or provide support. Please check back in a couple weeks
for a more mature offering.

## Usage
#### Initialization
Simply provide an API key for a new `Client` instance.

```
var taiga = require('taiga-njs');
var client = new taiga.Client("YOUR_API_KEY");
```

#### Usage
Still figuring this out, exactly.

So why publish this module? Because it can at least do this:

```
var issue = {
  description: "This is a new issue description",
  subject: "New Issue",
  project: 1
}

client.createNewIssue(issue);
```

... which is what I need it for right now :).
