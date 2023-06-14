import EventEmitter from "events";
import { Direction } from "./src";

export class Controller  {
    private rover: MarsRover
    constructor(marsRover = new MarsRover()) {
this.rover = marsRover
    }

    move(dir: Direction, amount: number): void {
        this.rover.move(dir, amount)
    }

    on(name: 'moved', listener: (newPos: {x: 0, y: 0}) => unknown) {
        this.rover.on(name, listener)
    }

}

/**
 * The real mars rover, which takes a long time to receive commands
 */
class MarsRover extends EventEmitter {
    private x = 0
    private y = 0
    private dir: Direction = 'N'
    constructor(initialPosition: {
        x: number,
y: number,
dir: Direction,
    } = {x: 0, y: 0, dir: 'N'}) {
        super()
        this.x = initialPosition.x
        this.y = initialPosition.y
        this.dir = initialPosition.dir
        
    }

    move(dir: Direction, amount: number) {
        // Here could be a fetch call.
        // Let\s say we fetch an API, and transform the response,
        // In a test we would mock the REST API,
        // but we still need to test that the transformation works
        // fetch('https://api.example.com').then(res => res.json())
        // .then(res => {
        //   this.emit('result', res.count / 100)
        //                        ^^^^^^^^^^ this is logic that still needs to be tested
        // })
        // If you mock this class (or this method) you are not testing it
        setTimeout(() => {
            // TODO: calculate new coordinates
            let newX = this.x
            let newY = this.y
            this.dir = dir
            this.emit('moved', {x: newX, y: newY}) // -2
        }, amount * 100);
        return {success: true}
    }

}

// Given
const mr = new Controller()

// When
mr.move('S', 2)

// Then assert that new position is x: 0 and y: -2
mr.on('moved', (newPos) => console.log({newPos}))

/*
describe('MarsRover Controller', () => {
    it('should emit the moved event with the new position', done => {
        
        // Given
        const mr = new Controller()

        // When
        mr.move('S', 2)

        // Then assert that new position is x: 0 and y: -2
        mr.on('moved', (newPos) => console.log({newPos}))

         // FIXME: Figure out how to test
        assert(newPos).toMatchObject({x: 0, y: -2})

    })
})
*/