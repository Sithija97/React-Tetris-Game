import React from "react";
import Menu from "./menu";

const Game = ({ rows, columns }) => {

    // const [gameOver, setGameOver, resetGameOver]

    const start = () => { console.log('start'); }

    return (
        <div className="Game">
            <Menu onClick={start} />
        </div>
    )
}

export default Game;