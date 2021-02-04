import {React,useState,useEffect} from 'react'
import "./Nav.css";



function Nav() {
    const [show, setShow] = useState(false);

    const transcitionbar = ()=>{
 if(window.scrollY > 100){
   setShow(true);
 }
   else{
       setShow(false);
   }

 }

 useEffect(() => {
    window.addEventListener("scroll", transcitionbar);
    return() =>
        window.removeEventListener("scroll",transcitionbar);
    }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
    <div className="nav__container">
    <img className="nav__logo"
    src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo" ></img>
    <img className="nav__avatar"
     src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" ></img>
    
    </div>
    
    </div>
  )

}
  

export default Nav
