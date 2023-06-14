import { Controller } from "../eventemitter-example";


describe('MarsRover Controller', () => {
    it('should emit the moved event with the new position', done => {
        
        const expectResult = {x: 0, y: 0}
        // Given
        const mr = new Controller()

        // When
        mr.move('S', 2)

        const callBack = (newPos: unknown) => {
            try {
                expect(newPos).toMatchObject(expectResult)
                done();
            }
            catch (error) {
                done(error);
              }
        }

        // Then assert that new position is x: 0 and y: -2
        mr.on('moved', callBack)

         // FIXME: Figure out how to test
       // assert(newPos).toMatchObject({x: 0, y: -2})

    })

    it('should emit the moved event with the new position (async)', async () => {
        
        const expectResult = {x: 0, y: 0}
        // Given
        const mr = new Controller()

        // When
        mr.move('S', 2)

        const promise = new Promise((resolve, reject) => {
            mr.on('moved', (value) => resolve(value))
        })

        await expect(promise).resolves.toMatchObject(expectResult); 
    })
})

