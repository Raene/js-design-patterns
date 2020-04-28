var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('completing Task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('completing Task: ' + this.name);
    this.completed = true;
}

//we take the save task and decorate it with more functionality without breaking the original save task
var urgentTask = new Task('Urgent Task');

urgentTask.notify = function(){
    console.log('notifying important people');
};

urgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

urgentTask.save();



module.exports = Task;