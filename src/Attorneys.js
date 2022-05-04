import { useState } from "react";

const Attorneys = (props) => {
  let [lawyer, setlawyer] = useState("");
  let [toggle, settoggle] = useState(false);
  const handlelawyerchange = (e) => {
    setlawyer(e.target.value);
  };
  const handlepayment = (e) => {
    settoggle(true);
  };
  return (
    <div>
      {!toggle ? (
        <>
          <h3 className="h3">select lawyer</h3>
          <h2 className="h2">lawyers - price</h2>
          <p className="p">select lawyers from dropdown</p>
          <select className="select"onChange={handlelawyerchange}>
            <option>Select</option>
            <option>lawyer1-2000</option>
            <option>lawyer1-4000</option>
            <option>lawyer1-6000</option>
            <option>lawyer1-6500</option>
            <option>lawyer1-8000</option>
            <option>lawyer1-20000</option>
          </select>
          <br />
          {lawyer && (
            <>
              {" "}
              <h3>
                {props.name} hope you made a good choice by selecting our{" "}
                {lawyer}
              </h3>
              <p className="selected">go a head and make payment of your selected lawyer</p>
              <button className="paymentbtn" onClick={handlepayment}>Make payment</button>
            </>
          )}
        </>
      ) : (
        <>
          <h3>Invoice</h3>
          <h2 className="success">Payment successfull....</h2>
          <p className="choose">
            Dear {props.name} you selected our lawyer {lawyer} its a great
            choice
          </p>
          <p className="case">case subject is as {props.case}</p>
        </>
      )}
    </div>
  );
};
export default Attorneys;
