import React, {useState} from "react";

import '../style/MainBox.css'

function StorageButton(props) { 
  const [state, setState] = useState(false);

    return (
      <div className={state && props.select? "StorageButton" : "StorageButton disable"} onClick={()=> setState(!state)}>
        {props.number}
      </div>  
    );
}

export default StorageButton;