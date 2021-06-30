import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
  },
}));

export function Form({children}:any) {
  const classes = useStyles();

  return <form className={classes.root}>{children}</form>;
}
