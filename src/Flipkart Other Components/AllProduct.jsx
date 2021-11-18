import React, { useEffect, useState ,useContext } from "react";
import Product from "./Product.jsx";
import {AddedProductContext} from '../ContextAPI/AddedProductContext'
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setAddedProductRedux} from '../Redux/Actions/Product'
const AllProduct = () => {

  //const [addedProduct, setAddedProduct] = useContext(AddedProductContext);
  const addedProductRedux = useSelector(state => state.product.addedProduct)
  const dispatch = useDispatch()
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const getProductDetails = async () => {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const finalOutput = await result.json();

      if (JSON.parse(localStorage.getItem("products"))) {
        console.log("Products alredy in localstorage so not loaded again in state");
      } else {
        setProducts(finalOutput);
        localStorage.setItem("products", JSON.stringify(finalOutput));
        console.log("not exits");
      }
    } catch (error) {
      console.log("Error is " + error);
    }
  };

  

  const history = useHistory();
  const b =  JSON.parse(localStorage.getItem('loginDetail'));
  

  
  const getProductData = (id,title,imgurl,rate,price)=>
  {
  if(!b)
  {
      history.push('/register')
  }else{ 
    const obj ={
      id:id,
      title:title,
      url:imgurl,
      rate:rate,
      email:b.email,
      price:price,
      qty:1
    }
    console.log(obj);
    const payload = [...addedProductRedux,obj]
     dispatch(setAddedProductRedux(payload))
    // setAddedProduct((prev)=>{
    //   return [...prev, obj];
    // });
  }
  }
  const proData = products.map((prod) => {
    return (
      <Product
        getProduct={getProductData}
        key={prod.id}
        id={prod.id}
        title={prod.title}
        desc={prod.description}
        category={prod.category}
        rate={prod.rating.rate}
        src={prod.image}
        price={prod.price}
      />
    );
  });

  useEffect(() => {
    getProductDetails();
  }, []);

 
 

  return (
    <>
      <h3 className="text-lg-center mt-5 text-uppercase">Product Details</h3>
      <hr></hr>
      <div className="row text-center">{proData}</div>
    </>
  );
};
export default AllProduct;
