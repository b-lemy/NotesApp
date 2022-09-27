import React, {useState} from "react";


const AddNote = ({handleAddNote}) => {
    const [NewText, setNewText] = useState('');

    const Limit = 200;

    const handleChange = (e) => {
        if (Limit - e.target.value.length >= 0) {
            setNewText(e.target.value)
        }


    }
    const handleSubmit = () => {
        if (NewText.trim().length > 0) {
            handleAddNote(NewText);
            setNewText('')
        }

    }
    return (
        <div className='note new'>
            <textarea
                className="text-area"
                rows='8'
                cols="10"
                placeholder="Enter a note"
                value={NewText}
                onChange={handleChange}
            >

            </textarea>
            <div className='note-footer'>

                <small> {Limit -NewText.length} remaining</small>
                <button onClick={handleSubmit}>Save</button>
            </div>


        </div>
    )
}


export default AddNote;