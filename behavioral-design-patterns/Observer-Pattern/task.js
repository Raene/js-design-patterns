var Task = function(data){
    this.name = data.name;
    this.user = data.user;
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

module.exports = Task;