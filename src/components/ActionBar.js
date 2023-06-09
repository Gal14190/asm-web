import React from "react";
import { Link } from "react-router-dom";

import add from "../res/add.png";
import history from "../res/history.png";
import live from "../res/live.png";

import "../style/ActionBar.css"

function ActionBar() {
    return (
        <div className="ActionBar">
            <Link to="/additem"><img src={add} /></Link>
            <Link to="/tracks"><img src={history} /></Link>
            <Link to="/liveview"><img src={live} /></Link>
        </div>
    );
}

export default ActionBar;