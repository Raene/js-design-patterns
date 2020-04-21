var repoFactory = function () {
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                console.log('From Cache');
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskrepo');
                return this.taskRepo;
            }
        }

        if (repoType === 'user') {
            var userRepo = require('./userRepo');
            return userRepo;
        }

        if (repoType === 'project') {
            var projectRepo = require('./projectRepo');
            return projectRepo;
        }
    }
};

module.exports = new repoFactory;