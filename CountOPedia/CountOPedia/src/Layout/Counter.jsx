import { useState } from "react";
import logo from "../Images/3d-icon-atomic-science-model-png.webp"
import logo2 from "../Images/3d-atom-illustration-for-school-png.webp"
function Counter() {
    let [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(function (prev) {
            return prev + 1;
        });
        console.log(count);
    }
    function handleDecrement() {
        setCount((prev) => prev - 1);
        console.log(count);
    }
    return (
        <div className="container">
            <div className="row text-white container">
                <h1> Game Score:{count}</h1>
                <p>you win at +5 points and lose at -5points</p>
                <p>Last play:</p>
                <h3> Game Status :</h3>
                <div className="col-6 col-md-3 offset-md-3">
                    <img src={logo} style={{ width: "100%", cursor: "pointer", border: "1px solid green" }}
                        className="p-4 rounded"></img>
                </div>
                <div className="col-6 col-md-3 offset-md-3">
                    <img src={logo2} style={{ width: "100%", cursor: "pointer", border: "1px solid green" }}
                        className="p-4 rounded"></img>
                </div>
                <button
                    onClick={handleIncrement}
                    className="btn btn-success m-2"
                >
                    +1
                </button>
                <button onClick={handleDecrement} className="btn btn-danger m-2">-1 </button>
            </div >
        </div>
    );
}
export default Counter;