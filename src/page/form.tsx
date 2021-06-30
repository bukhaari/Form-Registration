import React from "react";
import Input from "../components/Baseinput";
import DatePicker from "../components/DatePicker";
import BaseButton from "../components/BaseButton";
import { Grid, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    marginTop: theme.spacing(4),
    margin: theme.spacing(4),
    padding: theme.spacing(4),
  },
  SendButton: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    backgroundColor: "#555555",
    borderRadius: 0,
    left: "40%",
    width: "8rem",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#555555",
    },
  },
}));

const InputFields1 = [
  { name: "Source", topLabel: "Source Supplier", placeholder: "" },
  { name: "Phone", topLabel: "Phone", placeholder: "### ### ###" },
  { name: "Purchased", topLabel: "Purchased By", placeholder: "" },
  {
    name: "Confidential",
    topLabel: "Confidential clue page No",
    placeholder: "",
  },
];

const InputFields2 = [
  { name: "Address", topLabel: "Address", placeholder: "Street Address" },
  {
    name: "AddressLine",
    topLabel: "AddressLine",
    placeholder: "Street Address Line 2",
  },
];

const InputFields3 = [
  { name: "City", topLabel: "", placeholder: "City" },
  { name: "Region", topLabel: "", placeholder: "Region" },
  { name: "Postal", topLabel: "", placeholder: "Postal / Zip Code" },
  { name: "Romania", topLabel: "", placeholder: "Romania" },
  { name: "Clasification", topLabel: "Clasification No", placeholder: "" },
  { name: "Author", topLabel: "Author Marks", placeholder: "" },
  { name: "Usability", topLabel: "Usability Condition", placeholder: "" },
  { name: "EntryDate", topLabel: "Entry Date", placeholder: "", date: true },
  { name: "PublishPlace", topLabel: "Publish Place", placeholder: "" },
  { name: "copies", topLabel: "No of copies", placeholder: "" },
];

const InputFields4 = [
  { name: "copies", topLabel: "Accession No" },
  { name: "Ramarks", topLabel: "Ramarks", rows: 2 },
];

function Form() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.pageContent}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DatePicker name="ArrivalDate" label="Arrival data" />
          </Grid>
            {InputFields1.map((field, index) => (
              <Grid key={index} item xs={12} sm={6}>
                <Input
                  topLabel={field.topLabel}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </Grid>
            ))}

            {InputFields2.map((field, index) => (
              <Grid key={index} item xs={12}>
                <Input
                  topLabel={field.topLabel}
                  name={field.name}
                  placeholder={field.placeholder}
                />
              </Grid>
            ))}

            {InputFields3.map((field, index) => (
              <Grid key={index} item xs={12} sm={6}>
                {field.date ? (
                  <DatePicker name="arrivalDate" label="arrival data" />
                ) : (
                  <Input
                    topLabel={field.topLabel}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
                )}
              </Grid>
            ))}

            {InputFields4.map((field, index) => (
              <Grid key={index} item xs={12}>
                <Input
                  topLabel={field.topLabel}
                  name={field.name}
                  rows={field.rows}
                />
              </Grid>
            ))}
          <Grid item xs={12}>
            <BaseButton label="Send" className={classes.SendButton} />
          </Grid>
        </Grid>
      </form>
  
    </Container>
  );
}

export default Form;
