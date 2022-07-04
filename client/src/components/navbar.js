import {React, useState} from "react";

const Navbar = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [serverText, setServerText] = useState('Foobar');

    const handleServer = () => {
        fetch('/api')
        .then(response => response.json())
        .then(data => setServerText(data.message))
        .catch(error => console.log(error));
    }

    return (
        <div>
            <button onClick={() => setIsDisabled(!isDisabled)}>Enable/Disable</button>
            <input type="text" disabled={isDisabled}></input>
            <button onClick={handleServer}>Server</button>
            <span>{serverText}</span>
        </div>
    );
}

export default Navbar;