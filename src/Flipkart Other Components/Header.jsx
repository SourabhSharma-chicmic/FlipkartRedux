import Flip from "../Images/flip.png";
import { Link, Router } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../ContextAPI/AuthContext";

import { useHistory } from "react-router-dom";
import Button from "../Components/Button";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AddedProductContext } from "../ContextAPI/AddedProductContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {setAddedProductRedux} from '../Redux/Actions/Product'

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  
  const login = useSelector(state => state.auth.login)
  // const [login, setLogin] = useContext(AuthContext);
  const [addedProduct, setAddedProduct] = useContext(AddedProductContext);
  const addedProductRedux = useSelector(state => state.product.addedProduct)
  console.log(addedProduct.length);

  const total = addedProductRedux.reduce((accumulator, addedpro) => {
    console.log(
      "acumulator value is" +
        accumulator +
        " and addedproduct value is " +
        addedpro.qty
    );
    return accumulator + addedpro.qty;
  }, 0);

  console.log(total);

  const b = JSON.parse(localStorage.getItem("loginDetail"));
  if (b) {
    if (b.val == 1) {
      dispatch({type:'SET_LOGIN'})
      //setLogin(true);
    }
  }

  const logoutHandler = () => {
    localStorage.removeItem("loginDetail");
    //setLogin(false);
    dispatch({type:'SET_LOGOUT'})
    history.push("/");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ backgroundColor: "#3874f0" }}
      >
        <a className="navbar-brand" href="#">
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/">
                <img src={Flip}></img>
              </Link>
            </li>
          </ul>
          <div className="col-md-5">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for products ,brands and more"
              aria-label="Search"
            />
          </div>
          <div className="col-md-4">
            <div className="row align-content-end">
              <div className="col-md-12 my-lg-0">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    {login ? (
                      <Link
                        style={{ marginLeft: "200px" }}
                        className=" text-black text-decoration-none  btn btn-success bg-white me-4"
                        to="/"
                      >
                        Product
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item active">
                    {login ? (
                      <Link
                        className=" text-black text-decoration-none  btn btn-success d-md-block bg-white me-4"
                        to="/shophistory"
                      >
                        History
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item active">
                    {login ? (
                      <Link
                        className=" text-danger text-decoration-none btn btn-success bg-white me-5"
                        to="/cart"
                      >
                        Cart
                        <span className="badge d-md-inline text-dark badge-light">
                          {total}
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="nav-item active">
                    {login ? (
                      <Button
                        style={{ marginLeft: "100px" }}
                        className=" text-black text-decoration-none me-4 btn btn-danger me-5 opacity-50"
                        onClick={logoutHandler}
                      >
                        Logout
                      </Button>
                    ) : (
                      <Link
                        style={{ marginLeft: "200px" }}
                        className=" text-black text-decoration-none me-4 btn btn-success bg-white me-5"
                        to="/register"
                      >
                        Login
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
