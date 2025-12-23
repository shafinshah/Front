
import Login from "./Login";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Navbar(){
const navigate= useNavigate();


const handelSubmit =()=>{
 
localStorage.removeItem("token");

navigate("/Login")

}
    




   const user = sessionStorage.token;

 
    return (
        <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">E-Learning Platform</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link to="/Courses">Courses</Link>
        </li>
     </ul>
      {
        !user ? (
        <div className="Login">
      <Link to="/Login"><button type="button" className="btn btn-primary">Login</button> </Link>
     
     <Link to="/Signup"> <button type="button"  className="btn btn-danger">SignUp</button></Link> 
   </div>) :(
    <div style={{display:"flex"}}>
       
    <Link to="/Dashboard" ><p>Profile</p> </Link>
  
  
  
    <form onSubmit={handelSubmit}>
<button type="submit" style={{marginLeft:4}}>Log-out</button>
    </form>
      </div>
   
   )
}
 </div>
  


 </div>
   

       </nav> 

</div>
)
}




 



