import { useState } from 'react';

const TURNS = {
	X: 'x',
	O: 'o',
};

const WINNERS_COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 5],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? 'is-selected' : ''} `;
	const handlerUpdateBoard = () => {
		updateBoard(index);
	};
	return (
		<div onClick={handlerUpdateBoard} className={className}>
			{children}
		</div>
	);
};

function App() {
	const [board, setBoard] = useState(Array(9).fill(null));

	const [turn, setTurn] = useState(TURNS.X);

	const [winner, setWinner] = useState(null); // null

	const checkWinner = (boardToCheck) => {
		for (const combo of WINNERS_COMBOS) {
			const [a, b, c] = combo;
			if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
				return boardToCheck[a];
			}
		}
		// null si no hay ganador
		return null;
	};

	const updateBoard = (index) => {
		// si el un elemento tiene un valor, evitamos q se modifique
		if (board[index] || winner) return;

		// actualizando el tablero
		const newBoard = [...board];
		newBoard[index] = turn;
		setBoard(newBoard);
		// cambiando el turno
		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
		setTurn(newTurn);

		// verificando si hay ganador
		const newWinner = checkWinner(newBoard);

		if (newWinner) {
			setWinner(newWinner);
			console.log('el gandaro es: ', winner);
			// alert('el gandaro es: ', newWinner);
		}
	};

	return (
		<>
			<main className='board'>
				<h1>tic tac</h1>
				<section className='game'>
					{board.map((_, index) => {
						return (
							<Square key={index} index={index} updateBoard={updateBoard}>
								{board[index]}
							</Square>
						);
					})}
				</section>

				<section className='turn'>
					<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
					<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
				</section>
			</main>
		</>
	);
}

export default App;
