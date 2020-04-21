var Task        = require('./task');
var repos    = require('./repoFactory1');

var task1   = new Task(repos.name.get(1));
var task1   = new Task(repos.name.get(2));

var user    = repos.user.get(1);
var project = repos.project.get(1);

task1.user    = user;
task1.project = project;

task1.save();
console.log(task1);