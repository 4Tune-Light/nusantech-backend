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

genMaze1(15)