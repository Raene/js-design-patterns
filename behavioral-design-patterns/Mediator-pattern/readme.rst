###################
Mediator Pattern
###################

**************************
What does it do?
**************************
- Controls communication between objects so neither object has to be coupled to the others
- Allows for loosesly coupled systems
- One object manages all communication
- Many to many relationship

**************************
Mediator()
**************************
Our Mediator takes in 3 params: Channel, Context, Func.
We take in the Channel to publish or subscribe to.

When we Subscribe, we add a channel to the Mediator object if it does'nt already exist after that we push the Context and Function onto the Channel array. 

When we Publish, we pass in a channel and any amount of arguments needed by the Function in that channel.
The Publish function checks if the Channel exists.
If it exists it grabs the extra arguments and assigns to args variable.
Then proceeds to loop through the specified channel and appy the func in the channel object to the context of the channel object.

