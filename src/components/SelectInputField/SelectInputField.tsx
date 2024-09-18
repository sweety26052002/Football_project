import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectInputStyles from "./SelectInput.module.scss";

interface Item {
  id: number;
  name: string;
}

interface SearchFieldProps {
  list: Item[];
  selectedState: string;
  handleChange?: (event: string) => void;
  mobileNumber?: boolean;
  register?: any;
  error?: string;
}

const SelectInputField: React.FC<SearchFieldProps> = ({
  list,
  selectedState,
  handleChange,
  mobileNumber = false,
  register,
  error,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(selectedState);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
    if (handleChange) {
      handleChange(event.target.value as string);
    }
  };

  return (
    <FormControl
      className={` ${
        mobileNumber
          ? SelectInputStyles.mobileNumber
          : SelectInputStyles.selectContainer
      }`}
    >
      <Select
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: `${mobileNumber ? "none" : "1px solid #E0E0E0"}`,
          },
          "& .MuiOutlinedInput-input": {
            padding: "8.5px",
          },
        }}
        value={selectedValue || (list.length > 0 ? list[0].name : "")}
        onChange={handleSelectChange}
        {...register}
        className={SelectInputStyles.fontsizes}
      >
        {list &&
          Array.isArray(list) &&
          list.length > 0 &&
          list.map((object) => (
            <MenuItem key={object.id} value={object.name}>
              {object.name}
            </MenuItem>
          ))}
      </Select>
      {error && <p className={SelectInputStyles.error}>{error}</p>}
    </FormControl>
  );
};

export default SelectInputField;
