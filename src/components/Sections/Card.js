import React from 'react';

 const Card =({item})=>{

    const {name,url} = item
    return (
        <div className="">
            <a className='link' target="_blank" href={url} rel="noreferrer">{name}</a>
        </div>
    )
}
export default Card;