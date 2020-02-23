import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./style";

export default function CandidateList(props) {
  const classes = useStyles();

  const { handleCandidateSelect, candidateList } = props;
  return (
    <>
      <List
        className={classes.paper}
        component="nav"
        aria-label="secondary mailbox folders"
      >
        {candidateList.length > 0
          ? candidateList.map((data, id) => (
              <div key={id}>
                <ListItem
                  className="card2"
                  id={data.applicationId}
                  button
                  onClick={handleCandidateSelect}
                >
                  <ListItemText className={classes.bold}>
                    {data.name}
                  </ListItemText>
                </ListItem>
              </div>
            ))
          : ""}
      </List>
    </>
  );
}
