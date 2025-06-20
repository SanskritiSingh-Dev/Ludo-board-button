import { useState } from "react"

export default function LudoBoard() {
    let blueStyle = {
        backgroundColor: "blue",
        color: "black"
    }
    let redStyle = {
        backgroundColor: "red",
        color: "black"
    }
    let greenStyle = {
        backgroundColor: "green",
        color: "black"
    }
    let yellowStyle = {
        backgroundColor: "yellow",
        color: "black"
    }
    //instd of individual useState, we creatd an Object with key and value
    //we r using spread to make the copy of the values so that it can be re rendered, format : ...prevMove
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 })

    let updateBlue = () => {
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMove) => {
            return { ...prevMove, blue: prevMove.blue + 1 };
        });
    }

    let updateRed = () => {
        console.log(`moves.red = ${moves.red}`);
        setMoves((prevMove) => {
            return { ...prevMove, red: prevMove.red + 1 }
        })
    }

    let updateGreen = () => {
        console.log(`moves.blue = ${moves.green}`);
        setMoves((prevMove) => {
            return { ...prevMove, green: prevMove.green + 1 }
        })
    }

    let updateyellow = () => {
        console.log(`moves.blue = ${moves.yellow}`);
        setMoves((prevMove) => {
            return { ...prevMove, yellow: prevMove.yellow + 1 }
        })
    }

    return (
        <div>
            <p>Game Begins!!</p>
            <div className="board">
                <p>Blue moves : {moves.blue} </p>
                <button style={blueStyle} onClick={updateBlue} >+1</button>

                <p>Red moves : {moves.red}</p>
                <button style={redStyle} onClick={updateRed} >+1</button>

                <p>Green moves : {moves.green}</p>
                <button style={greenStyle} onClick={updateGreen} >+1</button>

                <p>Yellow moves : {moves.yellow}</p>
                <button style={yellowStyle} onClick={updateyellow} >+1</button>
            </div>
        </div>
    )
}