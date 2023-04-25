import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import add from "../res/add.png";

import '../style/MainBox.css'

function AddItem() {
    const [name, setName] = useState("");
    const [serial_number, setSerialNumber] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [storage, setStorage] = useState(500);
    const [image, setImage] = useState(null);

    const onSubmit = (e) => {   
        e.preventDefault();

        window.location.href = "/";
        
    }

    const getBitmap = (e) => {
        var file = URL.createObjectURL(e.files[0]);
        setImage(file);  
    }

    return (
        <div>
            <div className="title">Add new item</div>
            <form onSubmit={onSubmit}>
                <label>
                    Name
                    <input type="text" onChange={(e) => setName(e.target.value)} required />
                </label>
                <br/>
                <label>
                    Serial Number
                    <input type="text" onChange={(e) => setSerialNumber(e.target.value)} required />
                </label>
                <br/>
                <label>
                    Description
                    <input type="text" onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <br/>
                <label>
                    Amount 
                    <input type="number" value="0" onChange={(e) => setAmount(e.target.value)} required />
                </label>
                <br/>
                <label>
                    Storage
                    <input type="number" value="500" onChange={(e) => setStorage(e.target.value)} required />
                </label>

                <br/>
                <label>
                    Image
                    <input type="file" onChange={(e)=>getBitmap(e.target)} accept="image/png, image/jpeg" required />
                </label>

                <br/>
                <input type="image" src={add} />
            </form>
        </div>
    );
}

export default AddItem;