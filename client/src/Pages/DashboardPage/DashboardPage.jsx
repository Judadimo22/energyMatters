import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AdminNavBar from "../../Components/AdminNavBar/AdminNavBar";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { createUser, getUserById } from "../../redux/actions";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user, logout } = useAuth0();
    const [infoUser, setInfoUser] = useState({});
    const userState = useSelector((state) => state.user);
  
    useEffect(() => {
      if (user && isAuthenticated) {
        axios
          .get("https://backend-energymaters.onrender.com/users")
          .then((element) => {
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
              dispatch(createUser(newUser));
            } else {
              setInfoUser(userDb);
            }
            if (!userState.length) dispatch(getUserById(userDb._id));
          });
      }
    }, [user]);
    if (userState.roll === "user") window.location.href = "/";
    return(
        <div>
            <div>
                <AdminNavBar/>
            </div>
            <div className="pt-[200px]">
                <Dashboard/>
            </div>
        </div>
    )
};


export default DashboardPage;