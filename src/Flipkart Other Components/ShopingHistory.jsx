import { Link ,useHistory } from "react-router-dom";
import { useContext } from "react";
import { EmailContext } from "../ContextAPI/EmailContext";


const ShopingHistory = () => {

  const history = useHistory();
  const b = JSON.parse(localStorage.getItem("loginDetail"));
  if (!b) {
    history.push("/register");
  }
  const [email, setEmail] = useContext(EmailContext);
  console.log(email);
  const getProduct = JSON.parse(localStorage.getItem("history"));

  const AllProduct = getProduct.map((prod) => {
    if (prod.email === b.email) {
        return (
            <div className="col-lg-3 offset-1" key={prod.id}>
              <div className="card mb-5" style={{ width: " 18rem" }}>
                <Link to={`/description/${prod.id}`}>
                  <img
                    style={{ height: "200px", width: "200px", marginLeft: "35px" }}
                    className="card-img-top img-fluid"
                    src={prod.url}
                    alt="Card image cap "
                  />
                </Link>
                <hr></hr>
                <div className="card-body">
                  <h5 className="card-title text-truncate"> <span className='text-danger'>Title:</span> {prod.title}</h5>
                  <h5 className="card-title text-truncate"><span className='text-danger'>Price Per Unit : </span>₹ {prod.price} </h5>
                  <h5 className="card-title text-truncate"><span className='text-danger'>Qty Purchased :</span>{prod.qty} </h5>
                </div>
              </div>
            </div>
          );
    }else{
        return ''
    }
 
  });

  return (
    <>
      <div className="row mt-3">{AllProduct.length?AllProduct :'No History of Products Available'}</div>
    </>
  );
};

export default ShopingHistory;
