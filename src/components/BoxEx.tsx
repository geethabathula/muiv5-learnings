import { Box } from "@mui/material";
import React from "react";

function BoxEx() {
  return (
    <>
      <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
        This Box renders as an HTML section element.
      </Box>

      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      />
    </>
  );
}

export default BoxEx;
