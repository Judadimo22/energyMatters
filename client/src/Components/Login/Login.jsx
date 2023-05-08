import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {LoginButton} from '../LoginButton/LoginButton'
import { createUser, getUserById } from "../../redux/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { LogOutButton } from "../LogOutButton/LogOut";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({});
  const userState = useSelector((state) => state.user);





  useEffect(() => {
    if (user && isAuthenticated) {
      axios.get("http://localhost:3001/users").then((element) => {
        const userDb = element.data.find(
          (element) => element.email === user.email
        );
        if (!userDb) {
          const newUser = {
            name: user.given_name,
            lastname: user.family_name,
            email: user.email,
          };

          console.log(newUser);
          dispatch(createUser(newUser)).then(
            (e) => (window.location.href = `/dashboard`)
          );
        } else {
          setInfoUser(userDb);
        }
        if (!userState.length) dispatch(getUserById(userDb._id));
      });
    }
  }, [user]);


 

  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          {isAuthenticated ? (
              <div>
                <img
                  src={user?.picture}
                />
              </div>
          ) : (
            <LoginButton />
          )}
        </div>
        <div>
          <button onClick={() => logout()}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Login;