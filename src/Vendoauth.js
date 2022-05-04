import { useState } from "react";

const Vendoauth = (props) => {
  return (
    <div className="form">
      <div className="form-heading">VENDOR AUTHORIZATION FORM</div>
      <form>
        <label  className="input-css"htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={props.handlenamechange} placeholder="Enter your name" /><br/>
        {props.errmsg.nameerr && <span>{props.errmsg.nameerr}</span>}
        <br />
        
        <label className="input-css" htmlFor="name">Email:</label>
        <input type="email" name="company" onChange={props.handlenamechange}  placeholder="Enter your email"/><br/>
        {props.errmsg.emailerr && <span>{props.errmsg.emailerr}</span>}
      
        <label className="input-css" htmlFor="name">Mobile:</label>
        <input type="text" name="mobile" onChange={props.handlenamechange}  placeholder="Enter your mobile no"/><br/>
        {props.errmsg.mobileerr && <span>{props.errmsg.mobileerr}</span>}
        
        <br />
        <br />
        <label className="input-css" htmlFor="name">case:</label>
        <input
          type="text"
          placeholder="case type"
          name="case"
          onChange={props.handlenamechange}
        />
        <br/>
         {props.error && <span>*All fields are required</span>}
        
        <br />
        <button className="submitbtn" onClick={props.handlesubmit}>submit</button>
      </form>
    </div>
  );
};
export default Vendoauth;


/*import React from "react";

const Vendoauth = (props) => {
  return (
    <div className="form">
      <div className="form-heading">VENDOR AUTHORIZATION FORM</div>
      <form>
         
        <label  htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={props.handlenamechange} placeholder="Enter your name" /><br/>
       
        {props.errmsg.nameerr && <span>{props.errmsg.nameerr}</span>}
        <br />
      <label className="input-css" htmlFor="company">Email:</label>
        <input type="email" name="company" onChange={props.handlenamechange} placeholder="Enter your email" /><br/>
        {props.errmsg.emailerr && <span>{props.errrmsg.emailerr}</span>}
        <br />
        <label className="input-css" htmlFor="mobile">PhoneNo:</label>
        <input type="number" name="mobile" onChange={props.handlenamechange} placeholder="Enter your mobile no"/><br/>
        {props.errmsg.mobileerr && <span>{props.errmsg.mobileerr}</span>}

        <br />
       <label  className="input-css"htmlFor="case">Case:</label>
        <input
          type="text"
          placeholder="case type"
          name="case"
          onChange={props.handlenamechange}
        />
        <br />
        {props.error && <span>*All fields are required</span>}
        <br/>
        <button  className="submitbtn" onClick={props.handlesubmit}>submit</button>
      </form>
    </div>
  );
};
export default Vendoauth;*/
