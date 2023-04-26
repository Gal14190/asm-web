import React, {useState, useEffect} from "react";
import {db} from '../firebase'
import { collection, getDocs  } from "firebase/firestore";

import StorageButton from "./StorageButton";

import '../style/MainBox.css'
import TableItems from "./TableItems";
import ActionBar from "./ActionBar";

//const data = [500,501,502];
function ManagementPlatform(props) {
    const [data, setData] = useState([]);
    const [storages, setStorages] = useState({});
    const [value, setValue] = useState(data);

    const fetchPost = async () => {  
        await getDocs(collection(db, "Storage"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data() }));
                setData(newData);  
                setValue(newData);              
                console.log(newData);
            })
    }
   
    useEffect(()=>{
        fetchPost();
    }, []);
    

    

    const addStorage = () => {
        const newData = data.at(data.length - 1).id + 1;
        data.push({id: newData}); 
        setValue((p)=> ([...data]))
    };

    return (
        <div>
            <div className="title">Management Platform</div>
            
            <div className="row-storage">
                <span onClick={()=>{addStorage()}}>
                    <StorageButton number='+' select={false} />
                </span>

                {
                    value.map((element, index) =>
                    <span key={index} onClick={()=> setStorages((p)=> ({...p,[element.id]: !storages[element.id]}))}>
                        <StorageButton number={element.id} select={true} />
                    </span>
                )}
            </div>

            <TableItems data={props.data} storages={storages} />
            <ActionBar />
        </div>
    );
}

export default ManagementPlatform;