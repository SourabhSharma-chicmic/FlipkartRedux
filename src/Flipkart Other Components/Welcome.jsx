import { useParams } from "react-router-dom";
import React, { useContext } from "react";

const Welcome = () => {
  const { email } = useParams();

  return (
    <div className="container">
      <div className="row text-center mt-5">

            <h3 className='text-danger'>Welcome {email}</h3>
            
          
            

      </div>
    </div>
  );
};
export default Welcome;
