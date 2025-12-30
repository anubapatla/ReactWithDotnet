import { createRoot } from 'react-dom/client';
import "./style.css";

const root= createRoot(document.getElementById('root'));
const pagestyle ={
  textAlign:"center",
  backgroundColor:"lighgray",
  padding:"10px",
}
export function HomePage (){
  return (
    <div>
      <Header/>
      <p className="customHeading"> we are super exited to learn react</p>
      <Footer/>
      </div>
    );
}
function Header(){
  return(
    <div>
      <h1 style={pagestyle} className="text-success"> welcome to the react course</h1>
    </div>
  );
}
function Footer(){
  return(
    <div>
      <p> made with doenet mystery</p>
    </div>
  )
}
root.render(
  <HomePage/>
)

