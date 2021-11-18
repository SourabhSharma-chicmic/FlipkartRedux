import IndexImg from "../Images/scroll.png";
import AllProduct from "./AllProduct";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <img  className=' img-fluid m-lg-5' src={IndexImg}  />
        </div>
      </div>
      <div className='row text-capitalize text-center'>
        <div className='col-lg-12'>
          <AllProduct/>
        </div>
      </div>
    </>
  );
};

export default Home;
