import React from 'react'

export default function Products(props) {
    return (
        <div>
            <p>{props.counts}</p>
           <button onClick={props.handleClick}>Click</button> 
        </div>
    );
}

