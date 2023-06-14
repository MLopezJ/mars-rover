type Direction = 'N'|
'S'|
'W'|
'E'

// API Contract with Mars Rover
export type MarsRoverType = (args: {x: number, y: number, direction: Direction})=> {
    // synchronous operation, must NOT return a Promise
    // error if input error, e.g. invalid direction, for example 'NE' (not supported)
    // Move is EVENTUAL CONSISTANT
    move: (dir: Direction, distance: number) => {success: true}| {error: Error},
    // Gets called once the rover has moved
    on: (name: 'moved', listener: (newPosition: {x: number, y: number}) => void) => void
}

// Instatiate
const mr: ReturnType<MarsRoverType> = MarsRover({x: 42, y: 17, direction: 'N'})

// Give instruction
const res = mr.move('S', 2) // synchronous operation, must NOT return a Promise
// error if input error, e.g. invalid direction, for example 'NE' (not supported)

// Listen for event, must arrive not earlier than distance * 100ms = 200ms later
mr.on('moved', (newPosition: {x: number, y: number}) => {
    console.log(`New position is`, newPosition.x, newPosition.y) // x: 42, y: 19
})