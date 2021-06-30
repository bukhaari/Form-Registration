import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import {
  createStyles,
  FormControl,
  FormLabel,
  makeStyles,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      margingTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
    },
    DatePicker: {
      marginBottom: theme.spacing(2),
    },
  })
);

const DatePicker = (props: any) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultPra = (name: any, value: any) => ({
    target: {
      name,
      value,
    },
  });
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormControl fullWidth>
        <FormLabel className={classes.label}>{label}</FormLabel>
        <KeyboardDatePicker
          className={classes.DatePicker}
          disableToolbar
          size="small"
          variant="inline"
          inputVariant="outlined"
          format="MM/dd/yyyy"
        //   clearable={true}
          placeholder="MM/DD/YYYY"
          name={name}
          value={value}
        //   onChange={(dtae) => onChange(convertToDefaultPra(name, dtae))}
          onChange={() => null}
          fullWidth
        />
      </FormControl>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;