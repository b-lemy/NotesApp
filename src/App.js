import './index.css';
import NoteList from "./Component/NoteList";
import array from "./data"
import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import Search from "./Component/Search";
import Header from "./Component/Header";


function App() {

    const [notes, setNotes] = useState(array);
    const [search, NewSearch] = useState('')
    const [darkMode, SetDarkMode] = useState(false)

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
        if (savedNotes) {
            console.log(savedNotes);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('notes-app-data', JSON.stringify(notes));
    }, [notes]);

    const AddNote = (text) => {
        const date = new Date()
        const newNote = {
            id: nanoid(),
            body: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header ToggleHandler={SetDarkMode}/>
                <Search handleSearch={NewSearch}/>
                <NoteList
                    notes={notes.filter((note) => note.body.toLowerCase().includes(search))}
                    handleAddNote={AddNote}
                    deleteNote={deleteNote}
                />

            </div>
        </div>
    )
        ;
}

export default App;
