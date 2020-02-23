import React from "react";
import Grid from "@material-ui/core/Grid";
import VideoPlayer from "../../videoPlayer";
import MultilineTextfield from "../../multilineTextfield";
import { useStyles } from "./style";

export default function ApplicationInfo(props) {
  const { handleComments, videos } = props;

  const classes = useStyles();

  return (
    <>
      <Grid className={classes.gridStyle}>
        {videos.length > 0 ? (
          videos.map((data,id) => (
            <div key={id} className="mar-top">
              <div>
                <h3>{data.question}</h3>{" "}
              </div>
              <VideoPlayer data={data} />
              <MultilineTextfield
                handleComments={handleComments}
                id={id}
                data={data}
                label="Comments"
              />
            </div>
          ))
        ) : (
          <div className={classes.noappData}>No Application Data Found</div>
        )}
      </Grid>
    </>
  );
}
