import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";


const NoteList = ({notes,handleAddNote ,deleteNote}) => {
    return (
        <div className='note-list'>
            {notes.map((note) =>
                (
                    <Note key={note.id} body={note.body} date={note.date} deleteNote={deleteNote}/>
                ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}


export default NoteList;