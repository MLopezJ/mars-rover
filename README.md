# Mars Rover
> A kata about Event Emitter in Node.js 

## About
A mar rover need instruction from control tower to operate. Because of the distance between them, commands are received asynchrony. 

## Main task
Implemet a move command

```
move(dir, numOfSteps)

example: move('N',4)
```
* `dir` must be one of the following options = ['N','S','E','W']

* `numOfSteps` must be positive integer numbers

## Implementation rules
1. All commands take 100ms x number of steps
2. Must use Node.js EventEmitter to signal new position

