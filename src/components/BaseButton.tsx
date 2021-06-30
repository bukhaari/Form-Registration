import { Button } from "@material-ui/core";

interface ButtonType {
  label: any;
  className?: any;
}

const BaseButton = ({ label, className }: ButtonType) => {
  return (
    <Button fullWidth variant="contained" className={className}>
      {label}
    </Button>
  );
};

export default BaseButton;
