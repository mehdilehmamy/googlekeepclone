import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    //setClicked(false);
  }

  //Dropdown animation settings
  const [clicked, setClicked] = useState(false);
 
  function contentClicked() {
    setClicked(true);
  }

  return (
    <div>
      <form className="create-note">
        {clicked ? <div> <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autocomplete="off"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        /> 
         <Zoom in={clicked ? true : false}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
        </div> :  <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="1"
          onClick={contentClicked}
        />
        }
      </form>
    </div>
  );
}

export default CreateArea;
