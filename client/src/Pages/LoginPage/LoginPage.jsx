import React, { useState } from "react";
import Login from "../../Components/Login/Login";
import AdminNavBar from "../../Components/AdminNavBar/AdminNavBar";
import { useAuth0 } from "@auth0/auth0-react";
import DashboardPage from "../DashboardPage/DashboardPage";
import { Link } from "react-router-dom";


const LoginPage =  () => {
    const { isAuthenticated, user, logout } = useAuth0();
    return(
        <div>
            <div>
                <AdminNavBar/>
            </div>
            <div>
          {isAuthenticated ? (
              <div className="items-center pt-[200px] text-center">
                <Link to='/dashboard'>
                <h1 className="text-center">Go to the dashboard page</h1>
                </Link>
              </div>
          ) : (
            <div className="items-center pt-[200px] text-center">
                <h1 className="text-center">Please login with your admin account</h1>
            </div>
          )}
        </div>
            {/* <div>
            <Login/>
            </div> */}
        </div>
    )
};

export default LoginPage