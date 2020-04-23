###################
Behavioral design patterns
###################

**************************
What does it do?
**************************
Concerned with the assingment of responsibilities between objects and how they communicate

- First we create our services.
 - for the purpose of this, we would limit the functionality of the services to just basic updating messages to the console. 

**************************
ObserverList()
**************************

ObserverList just like the name suggests is a function that holds our registered observers in an array.
it has 3 prototype functions attached to it: count(),add(),get()
These funcions are pretty self explanatory.

**************************
ObservableTask()
**************************

This function is a wrapper that wraps around our  Task function.
It also instantiates an object of ObserverList for use in its prototype functions.
