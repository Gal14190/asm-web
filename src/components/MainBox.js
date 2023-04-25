import React from "react";
import { useParams } from 'react-router-dom';

import '../style/MainBox.css'
import ManagementPlatform from "./ManagementPlatform";
import AddItem from "./AddItem";
import LiveView from "./LiveView";

function MainBox() {
    var data = [
        {id:0, name: "HDMI Cable", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 500, amount: 10}
        , {id:1, name: "HDMI Cable2", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 501, amount: 11}
        , {id:2, name: "HDMI Cable3", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 502, amount: 12}
        , {id:3, name: "HDMI Cable34", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 502, amount: 13}
    ];

    const params = useParams();

    return (
        <div className="MainBox">
           {params.action == "manage"?  <ManagementPlatform data={data} />
           :params.action == "additem"? <AddItem />
           :params.action == "live"?    <LiveView data={data} />
           :<div/>}
        </div>
    );
}

export default MainBox;