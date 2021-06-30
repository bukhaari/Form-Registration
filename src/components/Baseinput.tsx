import { TextField, FormLabel } from "@material-ui/core";

// this is my interface or types of input
interface InputType{
  value?: any;
  name: string;
  inputLable?: string;
  onChange?: any;
  placeholder?:string;
  variant?:any;
  topLabel?: string;
  rows?: number;
  ref?:any;
}

function Input({topLabel, variant, value, name, inputLable, onChange, placeholder, rows, ref }:InputType) {
  return (
  <>
    <FormLabel>{topLabel}</FormLabel>
    <TextField
      fullWidth
      size="small"
      label={inputLable}
      placeholder={placeholder}
      value={value}
      name={name}
      variant={variant ||"outlined"}
      // onChange={(e) => onChange(e)}
      multiline
      rows={rows}
      rowsMax={rows}
      ref={ref}
    />
  </>
  );
}

export default Input;
