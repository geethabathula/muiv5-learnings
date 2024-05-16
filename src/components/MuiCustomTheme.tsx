import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  color: "#eee",
  height: "450px",
  width: "450px",
  backgroundColor: theme.palette.neutral?.darker,
}));

export const MuiCustomTheme = () => {
  return (
    <>
      <Box
        sx={{
          height: "250px",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: "secondary.main",
        }}
      ></Box>
      <StyledBox>I am Custom Component for styling Box</StyledBox>
    </>
  );
};
