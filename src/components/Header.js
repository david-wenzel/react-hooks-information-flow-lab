import React from "react";


function Header ({onDarkModeClick, readWords}){

    
    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {readWords}
        </button>
      </header>
)
}

export default Header;