import InputFieldStyles from "./InputFeild.module.scss";
import { Box, FormLabel } from "@mui/material";

interface IInput {
  placeholder: string;
  handleInputFunction?: (value: string) => void;
  label?: string;
  mobileNumber?: boolean;
  register?: any;
  error?: string;
  textArea?: boolean;
}

const InputField = (props: IInput) => {
  const { placeholder, label, mobileNumber, register, error, textArea } = props;

  const inputElement = textArea ? (
    <textarea
      className={`${InputFieldStyles.input}
        ${mobileNumber ? InputFieldStyles.noBorder : InputFieldStyles.border}
        ${InputFieldStyles.textArea}
        `}
      placeholder={placeholder}
      {...register}
    />
  ) : (
    <input
      className={`${InputFieldStyles.input}
        ${mobileNumber ? InputFieldStyles.noBorder : InputFieldStyles.border}
        `}
      placeholder={placeholder}
      {...register}
    />
  );

  return (
    <Box
      className={`${InputFieldStyles.container}
        ${mobileNumber ? InputFieldStyles.mobileNumberContainer : ""}`}
    >
      {label && (
        <FormLabel className={InputFieldStyles.label}>{label}</FormLabel>
      )}
      {inputElement}
      {error && <p className={InputFieldStyles.error}>{error}</p>}
    </Box>
  );
};

export default InputField;
