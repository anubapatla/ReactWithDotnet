
import logo from "../Images/react-logo/react-logo.png"
export default function Header(){
  return(
    <div>
      <img src={logo} style={{width: "10px"}}></img>
      <span className="text-success"> welcome to the react course</span>
    </div>
  );
}