import * as readline from 'readline'

type cardinalPoint = 'N' | 'S' | 'E' | 'W'
type rover = {
    direction: cardinalPoint,
    x: number,
    y: number
}
const rover: rover = {
    direction: 'N',
    x: 0,
    y: 0
}


/**
 * Command Line Interface
 */
const cli = () => {
	
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	})

	rl.setPrompt('Mars-rover> ')
	rl.prompt()

	rl.on('line', (input: string) => {
		console.log(input)
		rl.prompt()
	})
}

cli()