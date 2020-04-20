var task = {
    title: 'Object SHit',
    description: 'This shit Stonks '
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: true,
    enumerable:false,
    configuration: false
});

task.toString = "kkk";

console.log(task.toString);