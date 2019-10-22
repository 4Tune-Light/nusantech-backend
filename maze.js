function genMaze1(s) {
	let maze = []
	let dir = 'left'

	for (let i = 0; i < s; i++) {
		let row = []
		
		for (let j = 0; j < s; j++) {
			if (i % 2 == 0) {
				if (j == 1 && dir == 'left') {
					row.push(' ')
					go = 'right'
				} else if (j == s-2 && dir == 'right') {
					row.push(' ')
					go = 'left'
				} else {
					row.push('@')
				}

			} else {
				if (j == 0 || j == s-1) {
					row.push('@')
				} else {
					row.push(' ')
				}

			}

		}

		dir = go
		maze.push(row)
	}

	maze.map(val => console.log(val.join('')))
}

console.log('--------- MAZE 1 ---------')
genMaze1(15)
console.log('--------------------------')
console.log('')
console.log('')

function genMaze2(s) {
	let maze = new Array(s).fill(null).map(() => new Array(s).fill(' '))
	let dir = 'down'
	let x = 0
	let y = 0

	for (let i=0; i < s; i++) {
		if (i == 0) {
			length = s
		} else {
			length = s - (Math.floor((i-1)/2) * 2)
		}

		if (dir == 'down') {
			for (let j=0; j < length; j++) {
				maze[y][x] = '@'
				j < length-1 ? y++ : null
			}
			dir = 'right'

		} else if (dir == 'right') {
			for (let j=0; j < length; j++) {
				maze[y][x] = '@'
				j < length-1 ? x++ : null
			}
			dir = 'up'

		} else if (dir == 'up') {
			for (let j=0; j < length; j++) {
				maze[y][x] = '@'
				j < length-1 ? y-- : null
			}
			dir = 'left'

		} else if (dir == 'left') {
			for (let j=0; j < length; j++) {
				maze[y][x] = '@'
				j < length-1 ? x-- : null
			}
			dir = 'down'

		} 
	}

	maze.map(data => console.log(data.join('')))
}

console.log('--------- MAZE 2 ---------')
genMaze2(15)
console.log('--------------------------')
console.log('')
console.log('')