import SelectInputField from "../SelectInputField/SelectInputField";
import InputComponent from "../InputFeild/InputFeild";
import MobileNumberStyles from "./MobileNumberComponent.module.scss";
import { Box, FormLabel, Stack } from "@mui/material";

interface Item {
  id: number;
  name: string;
}

interface IMobile {
  placeholder: string;
  inputField: (a: string) => void;
  selectField: (a: string) => void;
  label: string;
  list: Item[];
  selectedState: string;
  countryCodeRegister?: any;
  mobileNumberRegister?: any;
  countryCodeError?: string;
  mobileNumberError?: string;
}

const MobileNumberInputField = (props: IMobile) => {
  const {
    placeholder,
    inputField,
    selectField,
    label,
    list,
    selectedState,
    countryCodeRegister,
    mobileNumberRegister,
    countryCodeError,
    mobileNumberError,
  } = props;

  return (
    <Box className={MobileNumberStyles.container}>
      {label && (
        <FormLabel className={MobileNumberStyles.label}>{label}</FormLabel>
      )}
      <Stack className={MobileNumberStyles.fieldContainer}>
        <Stack className={MobileNumberStyles.selectField}>
          <SelectInputField
            register={countryCodeRegister}
            mobileNumber={true}
            list={list}
            selectedState={selectedState ?? list[0].name}
            handleChange={selectField}
            error={countryCodeError}
          />
        </Stack>
        <Stack className={MobileNumberStyles.inputField}>
          <InputComponent
            register={mobileNumberRegister}
            mobileNumber={true}
            placeholder={placeholder}
            handleInputFunction={inputField}
            error={mobileNumberError}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default MobileNumberInputField;
