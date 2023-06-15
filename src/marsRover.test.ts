import { MarsRover } from "./marsRover"

describe('MarsRover', () => {
    it('should emit the moved event with the new position', async () => {
        const expectResult = {x: 0, y: 2}
        const rover = new MarsRover()

        rover.move('S', 2)

        const promise = new Promise((resolve, reject) => {
            rover.on('moved', (value) => resolve(value))
        })

        await expect(promise).resolves.toMatchObject(expectResult); 
    })
})

