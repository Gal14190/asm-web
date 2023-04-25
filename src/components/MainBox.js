import React from "react";
import { useParams } from 'react-router-dom';

import '../style/MainBox.css'
import ManagementPlatform from "./ManagementPlatform";
import AddItem from "./AddItem";

function MainBox() {
    const params = useParams();

    return (
        <div className="MainBox">
           {params.action == "manage"? <ManagementPlatform />:params.action == "additem"?<AddItem />:<div/>}
        </div>
    );
}

export default MainBox;