import React from 'react';
import './App.css'; // Tutaj może zmienię to na Tailwind, jak dobrnę do tego etapu :)
import Board from './components/Board/Board.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Kanban Board</h1>
            </header>
            <main>
                <Board />
            </main>
        </div>
    );
}

export default App;
