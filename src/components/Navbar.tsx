// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Button,
//   Stack,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { useState } from "react";

// export const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <AppBar position="static" color="transparent">
//       <Toolbar>
//         <IconButton size="large" edge="start" color="inherit" aria-label="logo">
//           <CatchingPokemonIcon />
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           POKEMONAPP
//         </Typography>
//         <Stack direction="row" spacing={2}>
//           <Button color="inherit">Features</Button>
//           <Button color="inherit">Pricing</Button>
//           <Button color="inherit">About</Button>
//           <Button
//             color="inherit"
//             id="resources-button"
//             aria-controls={open ? "resources-menu" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? "true" : undefined}
//             endIcon={<KeyboardArrowDownIcon />}
//             onClick={handleClick}
//           >
//             Resources
//           </Button>
//           <Button color="inherit">Login</Button>
//         </Stack>
//         <Menu
//           id="resources-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           MenuListProps={{
//             "aria-labelledby": "resources-button",
//           }}
//         >
//           <MenuItem onClick={handleClose}>Blog</MenuItem>
//           <MenuItem onClick={handleClose}>Podcast</MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
        aria-label="breadcrumb"
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Link underline="hover" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};
