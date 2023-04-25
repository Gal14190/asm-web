import React from "react";

import tag_icon from '../res/tag.png'
import edit_icon from '../res/edit.png'
import delete_icon from '../res/delete.png'    

import '../style/TableItems.css'

function link(id, storage, name, path) {
    window.location.href = `http://localhost:3000/${path}?id=${id}&storage=${storage}&name=${name}`;
}

function TableItems(props) {
    var data = [
        {id:0, name: "HDMI Cable", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 500}
        , {id:1, name: "HDMI Cable2", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 501}
        , {id:2, name: "HDMI Cable3", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 502}
        , {id:3, name: "HDMI Cable34", serialNumber: "120XA698R", description: "Gold cable htmi 10meter", storageId: 502}
    ]

    return (
        <div className="TableItems">
        <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Serial Number</th>
                <th>Description</th>
                <th></th>
            </tr>
            {
                data.map((element, index) => {
                    if(props.storages[element.storageId]) {
                        return (<tr>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.serialNumber}</td>
                                <td>{element.description}</td>
                                <td className="operation-icon">
                                    <img onClick={()=> link(element.id, element.storageId, element.name, "printTag")} src={tag_icon} />
                                    <img src={edit_icon} />
                                    <img src={delete_icon} /></td>
                            </tr>)
                    }
                })
                
            }
        </table>
        </div>
    );
}

export default TableItems;