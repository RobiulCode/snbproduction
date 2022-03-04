import React from "react";
import Card from "./Card";

const Section =({name,data,link})=>{
    return(
        <div className="section">
            <p className="section-name"><a href={link} target="_blank" rel="noreferrer">{name}</a></p>
            <div className="space-y-2">
                {
                        data.map((item,index)=> <Card item={item} key={index}></Card>)
                }
            </div>
        </div>
    )
}
export default Section;