import { TextFieldProps, TextField, IconButton } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function PasswordTextField(props: Omit<TextFieldProps, "InputProps" | "type">) {
  // props destructure
  // lib hooks
  const [isShow, setIsShow] = useState(false);

  // state hooks
  // query hooks
  // form hooks
  // calculate value
  // effect
  // handler
  return (
    <TextField
      {...props}
      type={isShow ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <IconButton onClick={() => setIsShow(!isShow)}>
            {!isShow ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        ),
      }}
    />
  );
}

export { PasswordTextField };
