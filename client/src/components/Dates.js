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

    const [form, setForm] = useState(null);

    function handleChange(e){
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e){
        e.preventDefault();
        createDate();
    }

    async function createDate(){
        try{
            const res = await axios.post('http://localhost:8080/dates', form);
            setDates([...dates, res.data]);
        }catch(e){
            console.error(e, e.message);
        }
    }

    const [edate, setEdate] = useState(null);

    async function editDate(){
        try{
            const res = await axios.patch('http://localhost:8080/dates')
        }catch(e){
            console.error(e, e.message);
        }
    }

    function chooseDate(date){
        console.log(date)
        setEdate(date);
    }
        return(
            <div>
                { dates && dates.map(date => (
                    <div className= "date" key={ date.id }> 
                        <h2> {date.day}/{date.month}/{date.year}</h2>
                        <button onClick={ () => chooseDate(date) }> Edit Date</button>
                    </div>
                ))}

                <div>
                    <h2>Create Date</h2>
                    <form
                        onChange= { (e) => handleChange(e) }
                        onSubmit = { (e) => handleSubmit(e) }>
                        <label>
                            Day: 
                            <input type="text" name="day"/>
                        </label>
                        <label>
                            Month: 
                            <input type="text" name="month"/>
                        </label>
                        <label>
                            Year: 
                            <input type="text" name="year"/>
                        </label>
                        <input type="submit" value="Create Date"/>
                    </form>
                </div>
            </div>
        )
}

export default Dates; 