import { styled } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";

export const StyledInputLabel = styled(InputLabel)(() => ({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#6C717B",
  "&.MuiFormLabel-colorPrimary": {
    color: "#6C717B",
  },
}));

export const StyledSelect = styled(Select)(() => ({
  position: "relative",
  display: "flex",
  marginTop: "8px",
  width: "360px",
  height: "56px",
  padding: "18px 20px",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#101828",
  backgroundColor: "#F7F7F7",

  ".MuiOutlinedInput-input": {
    padding: "0px",
    display: "flex",
    alignItems: "center",
  },

  "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },

  "& .MuiSelect-icon": {
    display: "none",
  },

  "& .MuiSelect-select:focus": {
    color: "#101828",
  },
}));

export const CustomMenuItem = styled(MenuItem)(() => ({
  display: "none",
}));

export const Options = styled(MenuItem)(() => ({
  display: "flex",
  padding: "0px 24px",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "48px",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.5,
  borderBottom: "1px solid #F7F7F7",
  color: "#101828",
  cursor: "pointer",

  "&.MuiButtonBase-root": {
    "&:hover, &:focus, &.Mui-selected": {
      backgroundColor: "#F7F7F7",
    },
  },
}));

export const StyledPaper = styled(Paper)(() => ({
  "&.MuiMenu-paper": {
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    maxHeight: "300px",
    overflowY: "auto",
  },
}));

