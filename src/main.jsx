import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Header from './Layout.jsx/Header';

const courseName = "React";
const lectureCount = 11;
const isActive = false;
function Students(){
  const fullName = "anusha"
  const programingExp = 0;
  return(
    <div className='container p-4 bg-success my-3 rounded'>
      <div  className="row border">
        <div className="col-2">
          <img src={`https://ui-avatars.com/api/?name=${fullName}`}></img>       </div>
      <div className="col-8">{fullName}<br/>
      coding experience{programingExp} years
     </div>
     </div>
    </div>
  )
}
export function HomePage () {
  return (
    <div>
      <Header/>
      <p className="customHeading" > we are super exited to learn react</p>
       <h3> Topics to learn in { courseName}courses</h3>
       <p> lecture count -{ lectureCount}</p>
       <p> Is Active:{isActive}</p>
       <ul>
          <li> jsx</li>
           <li> component</li>
           <li> routing</li>
            <li> stete mangement</li>
       </ul>
       <div>
        Enter Task:{""}
         <input type="text" maxLength={6} disabled={isActive}></input>
       </div>
       <Students/>
      <Footer/>
      </div>
    );
}

function Footer(){
  return(
    <div>
      <p> made with doenet mystery</p>
    </div>
  );
}
const container = document.getElementById('root');
if (!container.hasChildNodes()) {
  const root = createRoot(container);
  root.render(<HomePage />);
}


