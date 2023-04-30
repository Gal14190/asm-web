import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import { collection, getDocs  } from "firebase/firestore";

import incress from '../res/increase.png'
import decrease from '../res/decrease.png'

import '../style/TableItems.css'

function Tracks(props) {
    const [tracks, setTracks] = useState([]);

    const fetchPost = async () => {  
        await getDocs(collection(db, "Tracks"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data() }));
                setTracks(newData);             
                console.log(newData);
            })
    }
   
    useEffect(()=>{
        fetchPost();
    }, []);

    return (
        <div>
            <div className="title">IN/OUT Tracks</div>
            
            <div className="TableItems" style={{ height: "50vh"}}>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Serial Number</th>
                        <th>Date Time</th>
                        <th>By</th>
                        <th></th>
                    </tr>
                    {
                        tracks.map((element, index) => {
                            return (<tr>
                                    <td>{index}</td>
                                    {props.data.map((element2, index2) => element.itemId == element2.id && <td>{element2.name}</td>)}
                                    {props.data.map((element2, index2) => element.itemId == element2.id && <td>{element2.serialNumber}</td>)}
                                    <td>{element.time}</td>
                                    <td>{element.userName}</td>
                                    <td>{element.func == true ? <img src={incress} />: <img src={decrease} />}</td>
                                </tr>)
                        })
                        
                    }
                </table>
            </div>

        </div>
    );
}

export default Tracks;