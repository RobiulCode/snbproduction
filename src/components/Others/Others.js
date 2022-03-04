import React from "react";
import Card from "../Sections/Card";
import MainData from '../../Data/mainData'

const Others=()=>{
    return(
        <div className="md:flex md:space-x-4 md:justify-center mx-6 p-4">
            {
                MainData.map((item,index)=> <Card item = {item} key={index}></Card>)
            }
        </div>
    )
}
export default Others;