import React from "react";

const NewMessage = (props) => {
    let addNewMessageRef = React.createRef();
    return (
        <div>
            <textarea ref={addNewMessageRef}></textarea>
            <div>
                <button onClick={() => alert(addNewMessageRef.current.value)}>Send</button>
            </div>
        </div>
    )
}

export default NewMessage;