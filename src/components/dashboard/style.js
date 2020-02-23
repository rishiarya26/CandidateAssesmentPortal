import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      fontWeight: "bold"
    },
    bold: {
      fontWeight: "bold !important"
    },
    scroll: { maxHeight: 450, overflow: "scroll" },
    marginSmall:{
        marginLeft: 60
    },
    marginLarge:{
        marginLeft: "40%"
    },
    appInfoBackground:{
        backgroundColor: "rgb(241, 241, 241) !important"
    }
  }));
