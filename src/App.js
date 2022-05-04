import React from "react";
import Attorneys from "./Attorneys";
import "./styles.css";
import Vendoauth from "./Vendoauth";
import logo from "./companylogo.png";
import { useState } from "react";

export default function App() {
  let [toggle, settoggle] = useState(true);
  let [toggle1, settoggle1] = useState(false);
  let [error, setError] = useState(false);
  let [errmsg, seterrmsg] = useState({
    nameerr: "",
    mobileerr: "",
    emailerr: ""
  });
  let [state, setstate] = useState({
    name: "",
    company: "",
    mobile: "",
    case: ""
  });
  const handlenamechange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  
    if (state.name.length < 2) {
      errmsg.nameerr = "Name shoule be atleast 2 characters";
    
    } else {
      errmsg.nameerr = "";
      setError(false);
      
    }
    if (state.mobile.length !== 9) {
      errmsg.mobileerr = "Enter valid mobileno";
    } else {
      errmsg.mobileerr = "";
    }
   
   
 if(state.company!==""){
    if (!state.company.includes("@")) {
      errmsg.emailerr = "Enter valid email";
     
    } else {
      errmsg.emailerr = "";
    }
    return false;
  }
  
  
  
   
    //  console.log(state.name);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!state.name && !state.mobile && !state.company && !state.case) {
      
      setError(true);
    } else if(!errmsg.nameerr && !errmsg.emailerr && !errmsg.mobileerr) {
      settoggle(false);
    }
  };

  return (
    <>
      <div className="App">
      <header>
          <img src={logo} alt="logo"/> 
          <div className="heading"><span className="head">T</span>ECH    <span className="head">S</span>IMIANS   services</div>
        </header>
        {toggle ? (
          <>
            <button className="authbtn" onClick={() => settoggle1(true)}>vendor services</button>
            {toggle1 && (
              <Vendoauth
                handlesubmit={handlesubmit}
                handlenamechange={handlenamechange}
                error={error}
             
                //error={error}
                errmsg={errmsg}
              />
            )}
          </>
        ) : (
          <Attorneys name={state.name} case={state.case} />
        )}
   </div>
    </>
  );
}












/*import { useState } from "react";
import Attorneys from "./Attorneys";
import "./styles.css"
import Vendoauth from "./Vendoauth";
import logo from "./companylogo.png";

export default function App() {
  let [toggle, settoggle] = useState(true);
  let [toggle1, settoggle1] = useState(false);
  let [error, setError] = useState(false);
  let [errmsg, seterrmsg] = useState({
    nameerr: "",
    mobileerr: "",
    emailerr: ""
  });
  let [state, setstate] = useState({
    name: "",
  company: "",
    mobile: "",
    case: ""
  });
  const handlenamechange = (e) => {
    e.preventDefault();
    setstate({ ...state, [e.target.name]: e.target.value });
    if (state.name.length < 2) {
      errmsg.nameerr = "Name shoule be atleast 2 characters";
      
    } else {
      errmsg.nameerr = "";
      setError(false);
    
      
    }
    if (!state.company.includes("@")) {
      errmsg.emailerr = "Please enter valid email Id";
    } else {
      errmsg.emailerr = "";
     
      
    }
    if (state.mobile.length !== 9) {
      errmsg.mobileerr = "Please enter valid mobile no";
    } else {
      errmsg.mobileerr = "";
    }
    //  console.log(state.name);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!state.name && !state.company && !state.mobile) {
      setError(true);
    
    } else if (!errmsg.nameerr && !errmsg.emailerr && !errmsg.mobileerr) {
      
      settoggle(false);
      
    }
  
  };

  return (
    <>
      <div className="App">
        <header>
          <img src={logo} alt="logo"/> 
          <div className="heading"><span className="head">T</span>ECH    <span className="head">S</span>IMIANS   services</div>
        </header>
        {toggle ? (
          <>
            <button className="authbtn" onClick={() => settoggle1(true)}>vendor services</button>
            {toggle1 && (
              <Vendoauth
                handlesubmit={handlesubmit}
                handlenamechange={handlenamechange}
                name={state.name}
                email={state.email}
                mobile={state.mobile}
                error={error}
                errmsg={errmsg}
                //error={error}
                
              />
            )}
          </>
        ) : (
          <Attorneys name={state.name} case={state.case} />
        )}
      </div>
      
    </>
  );
}*/
