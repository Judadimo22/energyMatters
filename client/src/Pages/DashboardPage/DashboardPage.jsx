import React from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AdminNavBar from "../../Components/AdminNavBar/AdminNavBar";

const DashboardPage = () => {
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