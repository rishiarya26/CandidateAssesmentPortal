import React from "react";
import TextField from "@material-ui/core/TextField";

export default function MultilineTextfield(props) {
  const { handleComments, id, data, label } = props;
  return (
    <>
      <div className="mar-top-small bold">
        <TextField
          multiline
          className="space"
          rowsMax={3}
          label={label}
          size="small"
          variant="filled"
          id={id}
          onChange={handleComments}
          value={data.comments}
        ></TextField>
      </div>
    </>
  );
}
