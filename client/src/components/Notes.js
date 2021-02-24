import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

function Notes(){

    const [notes, setNotes ] = useState(null);

    async function getNotes(){
        try{
            const res = await axios.get('https://cryptic-thicket-90640.herokuapp.com/notes/');
            setNotes(res.data);
        }catch(e){
            console.error(e , e.message);
        }
    }
    
    useEffect(() => {
        getNotes();
    }, [])

    const [form, setForm] = useState(null);

    function handleChange(e){
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    function handleSubmit(e){
        e.preventDefault();
        createNote();
    }

    async function createNote(){
        try{
            const res = await axios.post('https://cryptic-thicket-90640.herokuapp.com/notes/', form);
            setNotes([...notes, res.data]);
        }catch(e){
            console.error(e, e.message);
        }
    }

    const [selectedNote, setSelectedNote] = useState(null);

    function selectNote(note){
        setSelectedNote(note);
    }

    function handleEditChange(e){
        const { name, value } = e.target;
        setSelectedNote({ ...selectedNote, [name]: value });
    }

    async function handleEditSubmit(e){
        e.preventDefault();
        try{
            const res = await axios.patch('https://cryptic-thicket-90640.herokuapp.com/notes/', selectedNote)
            getNotes();
        }catch(e){
            console.error(e, e.message);
        }
    }

    async function deleteNote(noteId){
        try{
            const res = await axios.delete('https://cryptic-thicket-90640.herokuapp.com/notes/' + noteId)
            getNotes();
        }catch(e){
            console.error(e, e.message);
        }
    }

        return(
            <div>
                { notes && notes.map(note => <Note note ={ note } selectNote={ selectNote } deleteNote={ deleteNote }/>)}

                <div className="createNote">
                    <h2>Create Note</h2>
                    <form
                        onChange= { (e) => handleChange(e) }
                        onSubmit = { (e) => handleSubmit(e) }
                    >
                        <label>
                            Note: 
                            <input className="inputBox" type="text" name="note"/>
                        </label>
                        <input className="inputSubmit" type="submit" value="Create Note"/>
                    </form>
                
                    { selectedNote && <form
                        onChange= { (e) => handleEditChange(e) }
                        onSubmit= { (e) => handleEditSubmit(e) }
                    >
                        <label>
                            Note: 
                            <input className="inputBox" type="text" name="note" defaultValue={ selectedNote.note }/>
                        </label>
                        <input className="inputSubmit" type="submit" value="Edit Note"/>
                    </form>}
                </div>
            </div>
        )
}

function Note({ note, selectNote, deleteNote }){
    return(
    <div className= "note" key={ note.id }> 
        <h2> {note.note} </h2>
        <Button color="warning" onClick={ () => selectNote(note) }> Edit Note </Button>{' '}
        <Button color="danger" onClick={ () => deleteNote(note.id)}> Delete Note </Button>{' '}
    </div>
    )
}

export default Notes; 