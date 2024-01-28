import React, { useEffect, useState } from "react";
import sidebarData from "../sidebarData";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
function Sidebar({ sendToProps }) {
  const [active, setActive] = useState("/");
  const [open, setOpen] = useState(true);


  const location = useLocation();
  const handelSidebar = () => {
    setOpen((prev) => !prev);
    sendToProps(open);
  };
  useEffect(() => {
    const curruntPath = location.pathname;
    setActive(curruntPath);
  }, [location.pathname]);



  var lockIcon = <span className="right-5 absolute"> <LockOpenIcon fontSize="large"></LockOpenIcon></span>
const addIconLock =(key)=>{
  if(key === 8 ){
    return lockIcon
  }
  else return ;
}
const goTopath=(value)=>{
  if (value ===  "/Test" && state8){
    lockIcon = <span className="right-5 absolute "> <LockIcon fontSize="large"></LockIcon></span>    
    return location.pathname ;
  }
  else{
    return  value }
}
  
const [state0, setState0] = useState(true);
const [state1, setState1] = useState(false);
const [state2, setState2] = useState(false);
const [state3, setState3] = useState(false);
const [state4, setState4] = useState(false);
const [state5, setState5] = useState(false);
const [state6, setState6] = useState(false);
const [state7, setState7] = useState(false);
const [state8, setState8] = useState(true);


const swipper = (key)=>{
 switch (key) {
  case 0 : return setState0(true)
  case 1 : return setState1(true)
  case 2 : return setState2(true)
  case 3 : return setState3(true)
  case 4 : return setState4(true)
  case 5 : return setState5(true)
  case 6 : return setState6(true)
  case 7 : return setState7(true)


 default: return(`Sorry, we are out of ${key}.`);
 }
 
 
}


useEffect(()=>{
  if(state0&& state1&& state2 &&state3 &&state4&& state5 &&state6 &&state7){
  setState8(false)
 }
},[state0, state1, state2 ,state3 ,state4, state5 ,state6 ,state7])





  return (
    <>
      {!open && (
        <div className="MenuIcon text-white p-1 ">
          <MenuIcon
            onClick={handelSidebar}
            style={{ fontSize: "40px", cursor: "pointer" }}
          />
        </div>
      )}
      {open && (
        <div className="Sidebar relative  z-30">
          <div className="flex gap-8 items-center justify-evenly">
            <div className="text-white m-1 text-left text-lg font-bold pt-3 ">
              Lean Traning Material
              <div className="text-center">Module 1</div>
            </div>
            <CloseIcon
              onClick={handelSidebar}
              style={{ cursor: "pointer" }}
              className="text-white h-6 m-1 icon"
            />
          </div>
          <nav>
            <ul>
              {sidebarData.map((val, key) => {
                return (
                  <div className={`${"NavItem"} ${active === val.path ? "active" : ""} `} key={key} >
                    
                    <Link to={goTopath(val.path)}>
                      <li onClick={() => swipper(key)} className="text-3xl no-underline text-white font-medium " >
                        <div>{val.title}  {addIconLock(key)}</div>
                      </li>
                    </Link>
                    
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Sidebar;
// const [location,setLocation] = useState(window.location.pathname)
// setActive(p)onClick={setActive(val.path)}
// id={window.location.pathname === val.path ? "active":""}
// id={active === val.path ? "active":""}
//const handelActive = (p) => {
// console.log(window.history.pushState({},window.location))
// console.log(p, window.location.pathname)
// setTimeout(() => {

//   if(window.location.pathname === p){
//     return setActive(p),setLocation(window.location.pathname );
//   }
//   else{
//     console.log("iaaaaaaa")
//   }
// }, 1000);
//};

// const hu=(n,a)=>{
//   if(window.location.pathname === a && a === n){
//     console.log(window.location.pathname,a,n);
//     return "active"
//   }
//   else{
//   }
// }
