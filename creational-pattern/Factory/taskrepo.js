var repo = function(){
    var db = {};

    var get = function (id){
        console.log(`Getting task ${id}`);
        return {
            name: 'new task from db'
        }
    }

    var save = function(task) {
        console.log(`Saving ${task.name} to the db`);
    }

    console.log('lining up new task');
    return {
        get:get,
        save:save
    }
}

module.exports = repo();