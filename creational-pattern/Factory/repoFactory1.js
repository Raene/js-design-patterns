var repoFactory = function(){
    var repos    = this;
    var repolist = [{name: 'name', source:'./taskrepo'},
                    {name: 'user', source:'./userRepo'},
                    {name: 'project', source:'./projectRepo'}];

    repolist.forEach(function(repo){
        repos[repo.name] = require(repo.source);
    });
};

module.exports = new repoFactory;