import { Theme } from "@mui/material";
import Button from "./Button";
import Select from "./Select";
import Input from "./Input";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Button(theme), Select(), Input());
}
