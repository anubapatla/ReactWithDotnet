 const Students=(props)=>{
  //const fullName = "anusha"
  //const programingExp = 0;
  return(
    <div className='container p-4 bg-success my-3 rounded'>
      <div  className="row border">
        <div className="col-2">
          <img src={`https://ui-avatars.com/api/?name=${props.name}`}
          style={{maxWidth:"45px"}}></img>       </div>
      <div className="col-8">{props.name}<br/>
      coding experience{props.experience} years
     </div>
     <div className="col-2">{props.children}</div>
     </div>
    </div>
  )
}
export default Students;