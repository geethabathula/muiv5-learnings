import React, { useState } from "react";
import {
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";

function ButtonEx() {
  const [align, setAlign] = useState<"left" | "center" | "right">("left");

  const handleAlign = (alignment: "left" | "center" | "right") => {
    setAlign(alignment);
  };
  return (
    <Stack spacing={5} margin={2}>
      <Typography variant="subtitle1">Buttons</Typography>
      <Stack direction="row" spacing={3}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Divider variant="middle" color="secondary"></Divider>
      <Typography variant="subtitle1">Chip</Typography>
      <Chip label="I am CHIP" color="success"></Chip>
      <Divider variant="middle" color="secondary"></Divider>
      <Typography variant="subtitle1">Colored Buttons</Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Divider variant="middle" color="secondary"></Divider>
      <Typography variant="subtitle1">Sized Buttons</Typography>
      <Stack direction="row" display="block" spacing={1}>
        <Button variant="contained" color="secondary" size="small">
          Small
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="secondary" size="large">
          Large
        </Button>
      </Stack>
      <Divider color="secondary"></Divider>
      <Typography variant="subtitle1">Icons</Typography>
      <Stack direction="row" display="block" spacing={1}>
        <Button
          variant="contained"
          color="info"
          size="large"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="error"
          size="large"
          startIcon={<AddLocationAltTwoToneIcon />}
          disableElevation
          disableRipple
          onClick={() => alert("hi")}
        >
          Location
        </Button>
        <IconButton color="success" size="large">
          <DoneOutlineTwoToneIcon />
        </IconButton>
      </Stack>
      <Divider color="secondary"></Divider>
      <Typography variant="subtitle1" sx={{ textAlign: align }}>
        ButtonGroups
      </Typography>
      <Stack direction="row" spacing={1}>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          disableRipple
          disableElevation
        >
          <Button onClick={() => handleAlign("left")}>Left</Button>
          <Button onClick={() => handleAlign("center")}>Center</Button>
          <Button onClick={() => handleAlign("right")}>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default ButtonEx;
