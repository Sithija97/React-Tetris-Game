import React from "react";
import { useGameOver } from "../hooks/useGameOver";
import Menu from "./menu";

const Game = ({ rows, columns }) => {

    const [gameOver, setGameOver, resetGameOver] = useGameOver()

    const start = () => {
        resetGameOver();
        console.log(`start game over is ${gameOver}`);
    }

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <p>Tetris</p>
            )}
        </div>
    )
}

export default Game;