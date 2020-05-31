import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Button onClick={handleClick}>
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default Note;
