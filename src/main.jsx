import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import Students from './Students';
import Header from './Layout.jsx/Header';
import StudentReview from './StudentReview';

const courseName = "React";
const lectureCount = 11;
const isActive = false;

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
       <hr/>
       <h5 className="pt-2"> students enrolled</h5>
       <Students  experience={2} name="anu Bapatla"/>
       <Students  experience={4} name="pravs chatala"/>
       <Students  experience={5}  name="neil sri"/>
       <StudentReview/>
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


