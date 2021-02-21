import React, { useEffect, useState } from 'react';

function Dates(){
    useEffect(() => {
        console.log("Hello, this is also a test!");
    }, [])

    return(
        <div>
            <h1>Hello, this is a test!</h1>
        </div>
    )
}

export default Dates; 