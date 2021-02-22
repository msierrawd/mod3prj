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

    const [selectedDate, setSelectedDate] = useState(null);

    function selectDate(date){
        setSelectedDate(date);
    }

    function handleEditChange(e){
        const { name, value } = e.target;
        setSelectedDate({ ...selectedDate, [name]: value });
    }

    async function handleEditSubmit(e){
        e.preventDefault();
        try{
            const res = await axios.patch('http://localhost:8080/dates', selectedDate)
            getDates();
        }catch(e){
            console.error(e, e.message);
        }
    }

        return(
            <div>
                { dates && dates.map(date => <Date date ={ date } selectDate={ selectDate }/>)}

                <div>
                    <h2>Create Date</h2>
                    <form
                        onChange= { (e) => handleChange(e) }
                        onSubmit = { (e) => handleSubmit(e) }
                    >
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
                
                    { selectedDate && <form
                        onChange= { (e) => handleEditChange(e) }
                        onSubmit= { (e) => handleEditSubmit(e) }
                    >
                        <label>
                            Day: 
                            <input type="text" name="day" defaultValue={ selectedDate.day }/>
                        </label>
                        <label>
                            Month: 
                            <input type="text" name="month" defaultValue={ selectedDate.month }/>
                        </label>
                        <label>
                            Year: 
                            <input type="text" name="year" defaultValue={ selectedDate.year }/>
                        </label>
                        <input type="submit" value="Edit Date"/>
                    </form>}
                </div>
            </div>
        )
}

function Date( { date, selectDate } ){
    return(
    <div className= "date" key={ date.id }> 
        <h2> {date.day}/{date.month}/{date.year}</h2>
        <button onClick={ () => selectDate(date) }> Edit Date </button>
    </div>
    )
}

export default Dates; 