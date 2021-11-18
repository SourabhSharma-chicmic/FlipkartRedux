import { useHistory, Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { AddedProductContext } from "../ContextAPI/AddedProductContext";
import { EmailContext } from "../ContextAPI/EmailContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setAddedProductRedux} from '../Redux/Actions/Product';

const Cart = () => {
  //const [addedProduct, setAddedProduct] = useContext(AddedProductContext);
  const addedProductRedux = useSelector(state => state.product.addedProduct)
  const dispatch = useDispatch()
  const [email, setEmail] = useContext(EmailContext);

  console.log("email value is ", email);
  const history = useHistory();
  const b = JSON.parse(localStorage.getItem("loginDetail"));
  if (!b) {
    history.push("/register");
  }

  const RemoveCartItemHandler = (proId) => {
    const filterArry = addedProductRedux.filter((item) => item.id !== proId);
    const payload = [...filterArry];
    dispatch(setAddedProductRedux(payload))
    //setAddedProduct(filterArry);
  };

  const addQtyHandler = (proId, fntype) => {
    
    const payload = [ ...addedProductRedux.map((item) => {
      if (item.id == proId) {
        if (fntype === "+") {
          item.qty++;
        } else {
          if (item.qty > 1) {
            item.qty--;
          } else {
            alert("cant less then 1");
          }
        }
      }

      return item;
    })];

    dispatch(setAddedProductRedux(payload))

    // setAddedProduct(
    //   addedProduct.map((item) => {
    //     if (item.id == proId) {
    //       if (fntype === "+") {
    //         item.qty++;
    //       } else {
    //         if (item.qty > 1) {
    //           item.qty--;
    //         } else {
    //           alert("cant less then 1");
    //         }
    //       }
    //     }
  
    //     return item;
    //   })
    // );
  };

  const arry = addedProductRedux.map((item) => {
    return (
      <>
        <div className="col-lg-12 mt-3 offset-1 " key={item.id}>
          <div className="card mb-5 me-5">
            <Link to={`/description/${item.id}`}>
              <img
                style={{ height: "200px", width: "200px", marginLeft: "35px" }}
                className="card-img-top img-fluid"
                src={item.url}
                alt="Card image cap"
              />
            </Link>
            <hr></hr>
            <div className="card-body">
              <h5 style={{ height: "100px" }} className="card-title ">
                <span className=" text-danger">Title : </span>
                {item.title}
              </h5>
              <h5>
                <span className=" text-danger">Rating : </span>
                {item.rate}
              </h5>
              <h5>
                <span className=" text-danger">Price : </span>₹{" "}
                {item.price * item.qty}
              </h5>
              <h5>
                <span className=" text-danger">Quantity : </span>
                {item.qty}
              </h5>

              <button type="button" onClick={() => { addQtyHandler(item.id, "-"); }} className="btn btn-sm btn-danger me-2  ">
                -
              </button>
              <input style={{ width: "80px" }} className=" form-control-sm" value={item.qty} type="number" step="1" min="1" ></input>
              <button type="button"  onClick={() => { addQtyHandler(item.id, "+"); }} className="btn btn-sm btn-danger ms-2" >
                +
              </button>
              <p className="mt-3">
                <button type="button" onClick={() => { RemoveCartItemHandler(item.id);}} className="btn btn-md btn-danger">
                  Remove
                </button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  });

  //finding total of all products addded in cart here using reduce function

  let total = addedProductRedux.reduce((accum, eachSingleProd) => {
    let temp = eachSingleProd.price * eachSingleProd.qty;
    return accum + temp;
  }, 0);

  const BuyCartItemsHandler = () => {
    localStorage.setItem("cartItems", JSON.stringify(addedProductRedux));
    alert("Your Order is Placed");

    setHistory();
  };

  const setHistory = () => {
    const cartValues = JSON.parse(localStorage["cartItems"]);

    if (localStorage.getItem(["history"])) {
      const oldValues = JSON.parse(localStorage.getItem(["history"]));
      localStorage.setItem(
        "history",
        JSON.stringify([...cartValues, ...oldValues])
      );
    } else {
      localStorage.setItem("history", JSON.stringify(cartValues));
    }

    //setAddedProduct([])

    const payload = [];
    dispatch(setAddedProductRedux(payload))
  };

  return (
    <>
      <div className="row text-center">
        <div
          style={{ height: "700px" }}
          className="col-lg-5 offset-1 mt-5 overflow-auto "
        >
          {arry.length ? (
            arry
          ) : (
            <h1 className="text-center text-danger mt-5">
              No item added in the cart
            </h1>
          )}
        </div>

        <div className="col-lg-2 offset-1 mt-5">
          {total == "0" ? (
            ""
          ) : (
            <h2 className=" text-uppercase text-black mt-5">
              Total Price :<br></br> <span className="fw-bold">₹ {total} </span>
              <br></br> <br></br> <button
                onClick={BuyCartItemsHandler}
                className="btn btn-success btn-lg mt-5 btn-lg ms-4"
              >
                Buy All Products
              </button>
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
