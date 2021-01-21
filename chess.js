//black pawns = 1
//white pawns = 2

playChess(3,3)

let board = [
    [0,0,0,0,0,0,0,0],
    [0,1,0,1,0,1,0,0],
    [0,0,2,0,2,2,2,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
]

const playChess = (xCoord,yCoord) => {
    const y = yCoord - 1
    const x = xCoord - 1
    
    const coord = board[y][x]
    
    if (!coord) {
        console.log('there is no piece here')
        return
    }

    let result
    const color = coords == 1 ? 'Black' : 'White'

    if (coord == 1) {
        result = canBlackPawnAttack(xCoord,yCoord)
    } else if (coord == 2) {
        result = canWhitePawnAttack(xCoord,yCoord)
    }

    if (!result) {
        console.log('no possbile moves')
        return
    }
    console.log(`${color} can attack these pieces => ${JSON.stringify(result)}`)
}

const canBlackPawnAttack = (x,y) => {
    y = y++
    x = x - 1

    const yAttack = y++

    const possibleAttacks = []

    if (board[yAttack][x+1] == 2) {
        possibleAttacks.push({'xCoord':x + 1 + 1, 'yCoord':y})
    }
    if (board[yAttack][x-1] == 2) {
        possibleAttacks.push({'xCoord':x, 'yCoord':y})
    }
    
    return possibleAttacks.length > 0 ? possibleAttacks : false
}

const canWhitePawnAttack = (x,y) => {
    y = y - 1
    x = x - 1

    const yAttack = y - 1

    const possibleAttacks = []

    if (board[yAttack][x+1] == 1) {
        possibleAttacks.push({'xCoord':x + 1 + 1, 'yCoord':y})
    }
    if (board[yAttack][x-1] == 1) {
        possibleAttacks.push({'xCoord':x, 'yCoord':y})
    }
    
    return possibleAttacks.length > 0 ? possibleAttacks : false
}