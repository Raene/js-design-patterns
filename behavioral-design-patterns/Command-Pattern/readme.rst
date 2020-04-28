###################
Command design patterns
###################

**************************
What does it do?
**************************
Encapsulates the calling of a method as an object.
Fully decouples the execution from the implementation.
Support undo operations.
Supports auditing and logging of operations.

**************************
How it Works
**************************
Here we create an execute() that takes the name of a method we want to execute.
By doing this we eliminate the need to have to call the method manually by ourselves.

The Command Pattern as applied in the execute() takes in the method we want to call and the object/objects we want to call it on

In the execute() we push an object containing the method name and the object it's called on into the commands array.

In our Command array we now have all the Methods and the objects they were called on, this is useful to have as it gives us a history of operations on this repo, if there was an error, we now have the ability to rerun the operation, we do experiment with that using the replay()
