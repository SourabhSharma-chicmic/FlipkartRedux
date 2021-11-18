import React, { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Fimg from "../Images/flipkart.png";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const [showPanel, setShowPanel] = useState(false);

  const panelHandler = () => {
    
    setShowPanel(!showPanel);
  };

  return (
    <React.Fragment>
     
        <div className="row">
          <div className=" #ee621e mt-5 col-md-6 offset-2">
            <div className="row border text-center">
              <div style={{ backgroundColor: "#3874f0" }} className="col-md-6">
                <img className='img-fluid me-2'
                  
                  src={Fimg}
                  alt="Fliplkart Image"
                />
              </div>
              {showPanel ? (
                <div className="col-md-6 ">
                  <RegisterForm panelHandler={panelHandler} />
                </div>
              ) : (
                <div className="col-md-6 ">
                  <LoginForm panelHandler={panelHandler} />
                </div>
              )}
            </div>
          </div>
        </div>
      
    </React.Fragment>
  );
};

export default Register;
