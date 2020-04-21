var Task = require('./task');
var Repo = require('./taskrepo');

var task1 = new Task(Repo);

task1.complete();
task1.save();