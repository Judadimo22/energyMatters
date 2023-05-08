import React, { useState } from "react";
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { LoginButton } from "../LoginButton/LoginButton";
import { BiLogOut } from "react-icons/bi";


const AdminNavBar = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const { isAuthenticated, user, logout } = useAuth0();
    const [infoUser, setInfoUser] = useState({});
    const userState = useSelector((state) => state.user);
    return(
        <div class='shadow-md w-full fixed top-0 left-0 z-10'>
            <div class='pt-[6px] pb-[5px] flex items-center justify-center bg-blue-800'>
                <ul class='justify-between cursor-pointer'>
                <a href="https://www.linkedin.com/in/claudiabedoya-energymatters/"><span class='text-white mx-[10px]'><ion-icon name="logo-linkedin"></ion-icon></span></a>
                <span class=' text-white mx-[10px]'><ion-icon name="logo-instagram"></ion-icon></span>
                <a href="https://www.youtube.com/@EnergyMattersTV"><span class='text-white mx-[10px]'><ion-icon name="logo-youtube"></ion-icon></span></a>
                </ul>
            </div>
            <div class='md:flex items-center justify-between py-4 md:px-10 px-7 bg-white'>
                <div class='font-bold text-2xl cursor-pointer flex items-center'>
                    <Link to='/'>
                    <img class='w-[200px]' src={logo} alt="" />
                    </Link>
                </div>
            <div className="flex justify-center items-center">
        <div className="pr-[100px]">
          {isAuthenticated ? (
              <div className="flex items-center">
                <div>
                <img
                  className="rounded-full h-[50px] mr-[20px] "
                  src={user?.picture}
                />
                </div>
                <h1 className="mr-[20px]">
                    Hello {user.name}
                </h1>
                <button  onClick={() => logout()}><BiLogOut/></button>
              </div>
          ) : (
            <LoginButton />
          )}
        </div>
        {/* <div>

        </div> */}
      </div>

            </div>


        </div>
    )
};

export default AdminNavBar;