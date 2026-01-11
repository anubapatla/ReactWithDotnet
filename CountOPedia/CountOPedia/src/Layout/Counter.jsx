import { useState } from "react";
import logo from "../Images/3d-icon-atomic-science-model-png.webp"
import logo2 from "../Images/3d-atom-illustration-for-school-png.webp"
function Counter() {
    let [count, setCount] = useState(0);
    let [gameStatus, setGameStatus] = useState("")//you won or lost

    function handleIncrement() {
        const newValue = count + 1;
        setCount(newValue);
        if (newValue >= 5) {
            setGameStatus("you won");
        }
        else {
            setGameStatus("");
        }
    }
    function handleDecrement() {
        const newValue = count - 1;
        setCount(newValue);
        if (newValue <= -5) {
            setGameStatus("you lost");
        }


    }

    function handleRandomPlay() {
        const playMode = Math.round(Math.random());
        if (playMode == 0) {
            handleIncrement();
        } else {
            handleDecrement();
        }
    }
    function handleReset() {
        setCount(0);
    }
    function handleLog() {
        console.log(count);
    }

    return (
        <div className="container">
            <div className="row text-white container">
                <h1> Game Score:{count}</h1>
                <p>you win at +5 points and lose at -5points</p>
                <h3> Game Status :{gameStatus}</h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img src={logo} style={{ width: "100%", cursor: "pointer", border: "1px solid green" }}
                        onClick={handleDecrement}
                        className="p-4 rounded"></img>
                </div>
                <div className="col-6 col-md-3 offset-md-3">
                    <img src={logo2} style={{ width: "100%", cursor: "pointer", border: "1px solid green" }}
                        onClick={handleIncrement}
                        className="p-4 rounded"></img>
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-success m-2 w-100" onClick={handleRandomPlay}>random play</button>
                    <button className="btn btn-danger m-2 w-100" onClick={handleReset}>reset</button>
                    <button className="btn btn-warning m-2 w-100" onClick={handleLog}>log</button>
                </div >
            </div>
        </div>
    );
}
export default Counter;