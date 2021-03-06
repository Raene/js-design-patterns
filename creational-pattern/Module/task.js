var Task = function(data){
    console.log(data);
    this.data = data;
    this.name = data.get(1).name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('completing Task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    this.data.save(this);

}

module.exports = Task;