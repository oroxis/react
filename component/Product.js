import React, { useState } from 'react'

export default function Product() {
    const [count, updateCount] = useState(0);
    const handleClick = () => {
        updateCount(count + 1)

    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
