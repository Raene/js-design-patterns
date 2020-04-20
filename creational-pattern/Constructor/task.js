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
//look into using Object.defineProperty on functional objects
// Object.defineProperty(Task, 'toS', {
//     value: function () {
//         return this.name;
//     },
//     writable: true,
//     enumerable:false,
//     configuration: false
// });

module.exports = Task;