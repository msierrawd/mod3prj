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
                { dates && dates.map(date => (
                    <div className= "date" key={ date.id }> 
                        <h2> {date.day}/{date.month}/{date.year}</h2>
                    </div>
                ))}
            </div>
        )
}

export default Dates; 