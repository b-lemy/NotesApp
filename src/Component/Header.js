import React from "react";


const Header = ({ToggleHandler}) => {

    const handler = () => {
        ToggleHandler(
            (previousDarkMode) => !previousDarkMode
        )
    }

    return (
        <div className="Header">
            <h1>NotesApp</h1>
            <button onClick={handler} className="Toggler">Toggler</button>
        </div>
    )
}
export default Header;