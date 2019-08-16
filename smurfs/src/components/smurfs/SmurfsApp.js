import React from 'react';
//Components
import FormikManageSmurfForm from "./ManageSmurfs";
import AllSmurfs from "./AllSmurfs";




const SmurfsApp = () =>{

    return(
        <div>
            <FormikManageSmurfForm />
            <AllSmurfs />

        </div>
    )
};
export default SmurfsApp;