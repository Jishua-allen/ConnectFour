import './connectFour.css';
import {useState} from 'react'

function Square({value, onSquareClick}) {
  return (
    <button 
      className={"square" + value}
      onClick={onSquareClick}
    ></button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(42).fill(null));

  function handleClick(column){
    column = column % 7
		if(!isArrayFull || calculateWinner(squares))
			return;
		const nextSquares = squares.slice();
    for(let i = (column+35); i >= 0; i-=7){
			if (nextSquares[i] == null && xIsNext){
        const element = document.querySelector('.square' + i);
        element.style.backgroundColor = '#9c2a2a';
				nextSquares[i] = 'Red'
				break;
			}
			else if (nextSquares[i] == null){
        const element = document.querySelector('.square' + i);
        element.style.backgroundColor = '#f2f763';
				nextSquares[i] = 'Yellow'
				break;
			}
    }
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
  }

	const buildBoard = () => {
		const board = [];
		for (let row = 0; row < 6; row++) {
			const rows = [];
			for (let col = 0; col < 7; col++) {
				const index = row * 7 + col;
				rows.push(
					<Square
            value={index}
						onSquareClick={() => handleClick(index)}
					/>
				);
			}
			board.push(<div className="board-row">{rows}</div>);
		}
		return board;
	};

  const winner = calculateWinner(squares);
  const gameIsTied = calculateTie(squares);
  let status;
  if (winner)
    status = "Winner: " + winner;
  else if (gameIsTied)
    status = "Tie Game."
  else
    status = "Next Player: " + (xIsNext ? "Red" : "Yellow");

return (
	<>
			<div className="status">{status}</div>
			{buildBoard()}
	</>
);
}

function isArrayFull(squares){
	for (let i = 0; i < 7; i++){
		if(!squares[i])
			return false;
		else
			return true;
	}
}

function calculateTie(squares){
  for(let i = 0; i < 7; i++){
    if(!squares[i])
      return false;
  }
  return true;
}

function calculateWinner(squares){
  const lines = [
    // Horizontal wins
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 4, 5],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
    [8, 9, 10, 11],
    [9, 10, 11, 12],
    [10, 11, 12, 13],
    [14, 15, 16, 17],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
    [22, 23, 24, 25],
    [23, 24, 25, 26],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [29, 30, 31, 32],
    [30, 31, 32, 33],
    [31, 32, 33, 34],
    [35, 36, 37, 38],
    [36, 37, 38, 39],
    [37, 38, 39, 40],
    [38, 39, 40, 41],
    
    // Vertical wins
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [4, 11, 18, 25],
    [5, 12, 19, 26],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [14, 21, 28, 35],
    [15, 22, 29, 36],
    [16, 23, 30, 37],
    [17, 24, 31, 38],
    [18, 25, 32, 39],
    [19, 26, 33, 40],
    [20, 27, 34, 41],
    // Diagonal wins
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    [9, 17, 25, 33],
    [10, 18, 26, 34],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
    [14, 22, 30, 38],
    [15, 23, 31, 39],
    [16, 24, 32, 40],
    [17, 25, 33, 41],
    [17, 23, 29, 35],
    [18, 24, 30, 36],
    [19, 25, 31, 37],
    [20, 26, 32, 38]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] === squares[d]
    ) {
      return squares[a];
    }
  }
  return null;
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
