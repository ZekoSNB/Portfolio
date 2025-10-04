const games = new Map();

function generatePin() {
  return Math.floor(1000 + Math.random() * 9000).toString(); // e.g. "4567"
}

export function createGame() {
  const pin = generatePin();
  games.set(pin, {
    board: Array(9).fill(null),
    players: [],
    turn: 0,
    winner: null,
  });
  return pin;
}

export function joinGame(pin, socketId, playerName) {
  const game = games.get(pin);
  if (!game) return { success: false, message: "Game not found" };
  if (game.players.length >= 2)
    return { success: false, message: "Game is full" };

  game.players.push({
    id: socketId,
    name: playerName,
    symbol: game.players.length === 0 ? "X" : "O",
  });
  return { success: true, game };
}

export function makeMove(pin, socketId, index) {
  const game = games.get(pin);
  if (!game || game.winner) return { success: false };
  const playerIndex = game.players.findIndex((p) => p.id === socketId);
  if (playerIndex !== game.turn) return { success: false };

  if (!game.board[index]) {
    game.board[index] = game.players[playerIndex].symbol;
    game.turn = 1 - game.turn;
    game.winner = checkWinner(game.board);
  }

  return { success: true, game };
}

function checkWinner(board) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[b] === board[c])
      return board[a];
  }
  return board.includes(null) ? null : "draw";
}
