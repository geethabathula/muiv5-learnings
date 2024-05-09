import {
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import React, { useState } from "react";

function TextFieldEx() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
    setError(inputValue !== "hello123");
  };

  return (
    <>
      <Typography variant="h5" textAlign="center" margin={5}>
        TextField
      </Typography>
      <Stack direction="column" spacing={2} margin={2}>
        <TextField
          id="outlined-basic"
          error={error}
          label="Password"
          variant="outlined"
          type="password"
          value={text}
          onChange={handlePwd}
        />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
      <Divider color="error" />
      <Typography variant="h5" textAlign="center" margin={5}>
        ReadOnly
      </Typography>
      <Stack direction="column" spacing={2} margin={2}>
        <TextField
          label="Country"
          value="India"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Divider color="error" />
      <Typography variant="h5" textAlign="center" margin={5}>
        Adding Prefix and Suffix using InputAdornment
      </Typography>
      <Stack direction="column" spacing={2} margin={2}>
        <TextField
          label="UserName"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilitySharpIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Amount"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">INR</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Weight"
          variant="standard"
          InputProps={{
            endAdornment: <InputAdornment position="end">kgs</InputAdornment>,
          }}
        />
      </Stack>
    </>
  );
}

export default TextFieldEx;
