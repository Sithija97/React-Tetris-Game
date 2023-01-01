import { useCallback, useState } from "react"

export const useGameOver = () => {
    const [useGameOver, setGameOver] = useState(true)
    
    const resetGameOver = useCallback(()=>{
        setGameOver(false)
    })

    return [useGameOver, setGameOver, resetGameOver] 
}