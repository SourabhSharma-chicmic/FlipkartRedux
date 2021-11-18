import {Link , Router } from 'react-router-dom';
import React, { useContext } from "react";
import { AddedProductContext } from "../ContextAPI/AddedProductContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setAddedProductRedux} from '../Redux/Actions/Product'

const Product = (props) => {

  //const [addedProduct, setAddedProduct] = useContext(AddedProductContext);

  const addedProductRedux = useSelector(state => state.product.addedProduct)
  const dispatch = useDispatch()

  const thisProduct = addedProductRedux.filter(item=>item.id===props.id);
    // const address = props.src;

    // let url = address.split(":")[1].split("//")[1]
    const RemoveCartItemHandler = (proId) => {
      const filterArry = addedProductRedux.filter(item=>item.id!==proId);
      const payload = [...filterArry]
      
      dispatch(setAddedProductRedux(payload))
     // setAddedProduct(filterArry);
    };
   
    
  return (
    <div className="col-lg-3 offset-1">
      <div className="card mb-5" style={{ width: " 18rem" }}>
      <Link  to={`/description/${props.id}`}><img style={{ height:'200px' ,width:'200px' ,marginLeft:'35px'}} className="card-img-top img-fluid" src={props.src} alt="Card image cap" /></Link> 
        <hr></hr><div className="card-body"> 
          <h5 className="card-title text-truncate">{props.title}</h5> 
          <h5 className="card-title text-truncate">₹ {props.price} </h5>
          <p>
            {thisProduct.length ?
             <button type="button"
             onClick={()=>{RemoveCartItemHandler(props.id)}}  className='btn btn-md btn-danger'>Remove</button>  :
            <button onClick={()=>{props.getProduct(props.id,props.title,props.src,props.rate ,props.price)}} type='button' className='btn btn-md btn-success me-2'>Add to cart</button> 
        
         
              
            }
            </p>
        </div>
      </div>
      </div>
    
  );


};

export default Product;
