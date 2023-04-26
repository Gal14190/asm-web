import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import {db} from '../firebase'
import { collection, getDocs  } from "firebase/firestore";

import '../style/MainBox.css'

import ManagementPlatform from "./ManagementPlatform";
import AddItem from "./AddItem";
import LiveView from "./LiveView";
import Tracks from "./Tracks";

function MainBox() {
    const [data, setData] = useState([]);

    const fetchPost = async () => {
       
        await getDocs(collection(db, "Items"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data() }));
                setData(newData);                
                console.log(data);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, []);

    /*var data = [
        {id:0, name: "HDMI Cable", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 500, amount: 10}
        , {id:1, name: "HDMI Cable2", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 501, amount: 11}
        , {id:2, name: "HDMI Cable3", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 502, amount: 12}
        , {id:3, name: "HDMI Cable34", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 502, amount: 13}
    ];*/

    const params = useParams();

    return (
        <div className="MainBox">
           {params.action == "manage"?  <ManagementPlatform data={data} />
           :params.action == "additem"? <AddItem />
           :params.action == "liveview"?    <LiveView data={data} />
           :params.action == "tracks"?    <Tracks data={data} />
           :<div/>}
        </div>
    );
}

export default MainBox;