import Button from "../Components/Button";
import Input from "../Components/Input";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";
import {EmailContext} from '../ContextAPI/EmailContext';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LoginForm = (props) => {
  // const [login, setLogin] = useContext(AuthContext);
  const login = useSelector(state => state.auth.login)
  const [email,setEmail] = useContext(EmailContext);
  const history = useHistory();
  const dispatch = useDispatch()
  const [credentails, setCredentials] = useState({
    email: "",
    password: "",
  });

  const changeHandlerLogin = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentails, [name]: value });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    if (credentails.email && credentails.password) {
      if (localStorage.getItem("users")) {
        const arry = JSON.parse(localStorage.getItem("users"));
        const b = arry.filter(
          (user) =>
            user.email == credentails.email &&
            user.password == credentails.password
        );
        if (b.length) {
          setEmail(credentails.email);
          localStorage.setItem(
            "loginDetail",
            JSON.stringify({
              val: 1,
              email: credentails.email,
            })
          );
          dispatch({
            type : "SET_LOGIN"
          })
          // setLogin(true);
          history.push(`/welcome/${credentails.email}`);
        } else {
          alert("Email or password does not match");
        }
      }else
      {
        alert('Create an Account First');
      }
    } else {
      alert("fill details");
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <Input
        onChange={changeHandlerLogin}
        type="email"
        placeholder="Email"
        name="email"
        className="form-control mt-5"
      />

      <Input
        onChange={changeHandlerLogin}
        type="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
        placeholder="Password"
        name="password"
        className="form-control mt-3"
      />

      <Button type="submit" className="btn mt-5 me-3  btn-danger">
        Login
      </Button>

      <Button
        type="button"
        onClick={props.panelHandler}
        className="btn mt-5  btn-outline-secondary"
      >
        New to flipkart? Register
      </Button>
    </form>
  );
};
export default LoginForm;
