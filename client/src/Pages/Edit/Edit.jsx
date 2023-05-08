import React from "react";
import AdminNavBar from "../../Components/AdminNavBar/AdminNavBar";
import EditNew from "../../Components/Admin/EditNew/EditNew";

const Edit = () => {
    return(
        <div>
            <div>
                <AdminNavBar/>
            </div>
            <div className="pt-[150px]">
                <EditNew/>
            </div>
        </div>
    )
};

export default Edit;