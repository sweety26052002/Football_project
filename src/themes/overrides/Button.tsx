import { Theme } from "@mui/material";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.main,
          outline: "none",
        },
      },
    },
  };
}
