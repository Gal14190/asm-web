import React, {useEffect, useState} from "react";

function fetchData(setItemId) {
    const interval = setInterval(() => {
        fetch("http://localhost:4000/")
        .then(response => {return response.text();})
        .then(data => {
            setItemId(Number(data))})
        .catch(e => setItemId(-2));
    }, 1000);
}

function LiveView(props) {
    const [itemId, setItemId] = useState(-1);

    useEffect(() => {
        fetchData(setItemId)
    }, []);

    return (
        <div>
            <div className="title">Live view</div>

            {(itemId == -2)? <div>Server not response</div> 
            : (itemId == -1)? <div>Ready for scan tag</div> 
            : props.data.map((element, index) => {
                if(element.id == itemId)
                    return <div style={{border: "1px solid white"}}>
                            <br/>
                            <span>Item: {element.name}</span>
                            <br />
                            <span>Serial Number: {element.serialNumber}</span>
                            <br />
                            <span>Amount: {element.amount}</span>
                            <br/>
                            <iframe src={"https://www.google.com/search?q=" + element.serialNumber} width="600" height="250"/> 
                        </div>
            })
            }
        </div>
    );
}

function findItem(data, id) {
    data.map((element, index) => {
        console.log(element.id == id);
        if(element.id == id) return <span>{element.id}</span>;
    });

   // return {id:-1, name: "", serialNumber: "", description: "", storageId: 500};
   return <span>not found</span>
}

export default LiveView;