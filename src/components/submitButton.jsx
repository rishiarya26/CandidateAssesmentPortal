import React from 'react';
import Button from "@material-ui/core/Button";

export default function SubmitButton(props) {
  const {handleSubmit, videos} = props;
  return (
    <>
     <div>
              {" "}
              {videos.length > 0 ? (
                <Button
                onClick={handleSubmit}
                  style={{ position: "absolute", right: "8%", marginTop: 30,backgroundColor: "rgb(37, 37, 37) !important "}}
                  variant="contained" 

                >
                  Submit
                </Button>
              ) : (
                ""
              )}
            </div>
    </>
  );
}
