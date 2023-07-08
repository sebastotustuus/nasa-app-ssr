'use client';
import TextField from '@mui/material/TextField';

interface InputFiledProps {
  label?: string;
  onChange?: () => void;
  defaultValue?: string | number;
  type: string;
}

const InputField = ({
  label = '',
  type = 'text',
  onChange,
  defaultValue = ''
}: InputFiledProps) => {
  return (
    <TextField
      id="outlined-number"
      label={label}
      type={type}
      onChange={onChange}
      defaultValue={defaultValue}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
};

export default InputField;
