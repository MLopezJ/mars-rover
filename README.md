# Mars Rover
> A kata about Events in Node.js

## About
It is a practical example about how to build software from the requirements starting with building an API contract first.

In the thecnical part, main concepts of JavaScript as Events ,async code and callbacks are shown.

It is a good example about who to test callbacks from an event.

## Instructions
A Mars rover need instruction from control tower to operate. Because of the distance between them, commands are received asynchrony. 

## Main task
Implemet a move command and notify when the rover moves

```
move(dir, numOfSteps)

example: move('N',4)
```
* `dir` must be one of the following options = ['N','S','E','W']

* `numOfSteps` must be positive integer numbers

## Implementation rules
1. All commands take 100ms x number of steps
2. Must use Node.js EventEmitter to signal new position
3. `getPosition` method is not allowed to be implemented
4. `move` method should return sucess or error. Coordinates are not allowed to be returned

## Installation
```
npm install
```
## Test
```
npm test
```

## Execution
```
npx tsx src/step2.ts
```

## Implementation process
in [Step 1](step1.ts) is described the API contract. The requirements are taking as an input and them are translated into code. There is no functionality yet but the goal of what is desired to archive is stablish.

[Step 2](step2.ts) is where the building of the functionality start. The input here is the previus step and the goal is to make it work.