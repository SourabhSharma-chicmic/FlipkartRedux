import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Register from "./Flipkart Other Components/Register";
import Header from "./Flipkart Other Components/Header.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Flipkart Other Components/Home";
import Description from "./Flipkart Other Components/Description.jsx";
import Cart from "./Flipkart Other Components/Cart";
import Welcome from "./Flipkart Other Components/Welcome";

import { AuthContextProvider } from "./ContextAPI/AuthContext";

import { AddedProductContextProvider } from "./ContextAPI/AddedProductContext";
import ReduceUse from "./Extra work (faltu)/ReduceUse";
import ShopingHistory from "./Flipkart Other Components/ShopingHistory";
import ErrorComp from "./Flipkart Other Components/ErrorComp";
import { EmailContextProvider } from "./ContextAPI/EmailContext";
import { Provider } from "react-redux";
import {store} from './Redux/store'

const App = () => {
  console.log("redux")
  return (
    <div className="container-fluid">

      <Provider store = {store}>
      <AuthContextProvider>
       <AddedProductContextProvider>
         <EmailContextProvider>
        <Header/>
          <Switch>
          <Route exact path='/' component={Home}/>
           <Route  path='/register' component={Register} />
           <Route path='/description/:id' component={Description}/>
           <Route path='/cart' component={Cart}/>
           <Route path='/welcome/:email' component={Welcome}/>
           <Route path='/shophistory' component={ShopingHistory}/>
           <Route component={ ErrorComp}/>
         </Switch>

         </EmailContextProvider>
         </AddedProductContextProvider>
   </AuthContextProvider>
      </Provider>


    {/* <ReduceUse/> */}
      {/*
      /*changing themes using context api values and also example of how to use Context api.*/
    /*  <AContextProvider>
        </AContextProvider> */}
    </div>
  );
};

export default App;
