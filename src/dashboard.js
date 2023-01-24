import React from "react";

export default function Dashboard(p){
    const popUp=()=>{
        alert("functional component called");
    }
    return <div>
        <h1 onClick={popUp}>
            {p.text}
        </h1>
    </div>
}