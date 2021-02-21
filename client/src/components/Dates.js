import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dates(){

const [dates, setDates ] = useState(null);

async function getDates(){
    try{
        const res = await axios.get('http://localhost:8080/dates');
        setDates(res.data);
    }catch(e){
        console.error(e , e.message);
    }
}
    useEffect(() => {
        getDates();
    }, [])

    return(
        <div>
            <h1>Hello, this is a test!</h1>
        </div>
    )
}

export default Dates; 