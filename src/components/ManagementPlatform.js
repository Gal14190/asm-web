import React, {useState, useEffect} from "react";

import StorageButton from "./StorageButton";

import '../style/MainBox.css'
import TableItems from "./TableItems";
import ActionBar from "./ActionBar";

const data = [500,501,502];
function ManagementPlatform() {
    

    const [storages, setStorages] = useState({});
    const [value, setValue] = useState(data);

    const addStorage = () => {
        data.push(data.at(data.length - 1) + 1); 
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
                    <span onClick={()=> setStorages((p)=> ({...p,[element]: !storages[element]}))}>
                        <StorageButton number={element} select={true} />
                    </span>
                )}
            </div>

            <TableItems storages={storages} />
            <ActionBar />
        </div>
    );
}

export default ManagementPlatform;