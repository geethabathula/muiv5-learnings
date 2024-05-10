import {
  Box,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function SelectEx() {
  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  const [age, setAge] = React.useState("");

  const handleAgeChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h5" letterSpacing={1}>
          Drop Down using Text Field with multiple selections using array as
          state
        </Typography>
        <Box width="280px">
          <TextField
            label="Select country"
            select
            SelectProps={{
              multiple: true,
            }}
            size="small"
            color="secondary"
            helperText="Please select your country"
            value={countries}
            onChange={handleChange}
          >
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
          </TextField>
        </Box>
        <Divider color="success"></Divider>
      </Stack>
      <Stack spacing={3}>
        <Typography variant="h5" letterSpacing={1}>
          Drop Down using Select
        </Typography>
        <Box width="280px">
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleAgeChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Divider color="success"></Divider>
      </Stack>
    </>
  );
}

export default SelectEx;
