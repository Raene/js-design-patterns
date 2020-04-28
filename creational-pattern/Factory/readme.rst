###################
Factory Pattern
###################

**************************
What does it do?
**************************
Simplifies object creation
creating different objects based on need
Repository creation
It pulls in the neccesary repo needed at a time, so the controller doesn't worry about that

**************************
How does it work?
**************************
In this code example, we simply use the factory pattern to fetch all our imports without clogging our main.js with import calls
So the necessary repos are pulled in when they're needed.