import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import '../css/style.css'

function Exercises(){

    const [exercises, setExercises ] = useState(null);

    async function getExercises(){
        try{
            const res = await axios.get('http://localhost:8080/exercises');
            setExercises(res.data);
        }catch(e){
            console.error(e , e.message);
        }
    }
    
    useEffect(() => {
        getExercises();
    }, [])

    const [form, setForm] = useState(null);

    function handleChange(e){
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e){
        e.preventDefault();
        createExercise();
    }

    async function createExercise(){
        try{
            const res = await axios.post('http://localhost:8080/exercises', form);
            setExercises([...exercises, res.data]);
        }catch(e){
            console.error(e, e.message);
        }
    }

    const [selectedExercise, setSelectedExercise] = useState(null);

    function selectExercise(exercise){
        setSelectedExercise(exercise);
    }

    function handleEditChange(e){
        const { name, value } = e.target;
        setSelectedExercise({ ...selectedExercise, [name]: value });
    }

    async function handleEditSubmit(e){
        e.preventDefault();
        try{
            const res = await axios.patch('http://localhost:8080/exercises', selectedExercise)
            getExercises();
        }catch(e){
            console.error(e, e.message);
        }
    }

    async function deleteExercise(exerciseId){
        try{
            const res = await axios.delete('http://localhost:8080/exercises/' + exerciseId)
            getExercises();
        }catch(e){
            console.error(e, e.message);
        }
    }

        return(
            <div>
                { exercises && exercises.map(exercise => <Exercise exercise ={ exercise } selectExercise={ selectExercise } deleteExercise={ deleteExercise }/>)}

                <div>
                    <h2>Create Exercise</h2>
                    <form
                        onChange= { (e) => handleChange(e) }
                        onSubmit = { (e) => handleSubmit(e) }
                    >
                        <label>
                            Exercise Name: 
                            <input className="inputBox" type="text" name="exercise"/>
                        </label>
                        <label>
                            Sets: 
                            <input className="inputBox" type="text" name="sets"/>
                        </label>
                        <label>
                            Reps: 
                            <input className="inputBox" type="text" name="reps"/>
                        </label>
                        <label>
                            Weight: 
                            <input className="inputBox" type="text" name="weight"/>
                        </label>
                        <label>
                            LB or KG: 
                            <input className="inputBox" type="text" name="lborkg"/>
                        </label>
                        <input className="inputSubmit" type="submit" value="Create Exercise"/>
                    </form>
                
                    { selectedExercise && <form
                        onChange= { (e) => handleEditChange(e) }
                        onSubmit= { (e) => handleEditSubmit(e) }
                    >
                        <label>
                            Exercise Name: 
                            <input className="inputBox" type="text" name="exercise" defaultValue={ selectedExercise.exercise }/>
                        </label>
                        <label>
                            Sets: 
                            <input className="inputBox" type="text" name="sets" defaultValue={ selectedExercise.sets }/>
                        </label>
                        <label>
                            Reps: 
                            <input className="inputBox" type="text" name="reps" defaultValue={ selectedExercise.reps }/>
                        </label>
                        <label>
                            Weight: 
                            <input className="inputBox" type="text" name="weight" defaultValue={ selectedExercise.weight }/>
                        </label>
                        <label>
                            LB or KG: 
                            <input className="inputBox" type="text" name="lborkg" defaultValue={ selectedExercise.lborkg }/>
                        </label>
                        <input className="inputSubmit" type="submit" value="Edit Exercise"/>
                    </form>}
                </div>
            </div>
        )
}

function Exercise({ exercise, selectExercise, deleteExercise }){
    return(
    <div className= "exercise" key={exercise.id}> 
        <h2> {exercise.exercise} {exercise.sets} x {exercise.reps} {exercise.weight} {exercise.lborkg}</h2>
        <Button color="warning" onClick={ () => selectExercise(exercise) }> Edit Exercise </Button>{' '}
        <Button color="danger" onClick={ () => deleteExercise(exercise.id)}> Delete Exercise </Button>{' '}
    </div>
    )
}

export default Exercises; 