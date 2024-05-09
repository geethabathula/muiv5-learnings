import { Typography } from "@mui/material";

export default function TypographyEx() {
  return (
    <>
      <Typography variant="h1">I am h1</Typography>
      <Typography variant="h2">I am h2</Typography>
      <Typography variant="h3">I am h3</Typography>
      <Typography variant="h4">I am h4</Typography>
      <Typography variant="h5">I am h5</Typography>
      <Typography variant="h6">I am h6</Typography>
      <Typography variant="subtitle1">I am subtitle1 of h6</Typography>
      <Typography variant="subtitle2">I am subtitle2 of h6</Typography>
      <Typography variant="body1">
        I am body1 for p tag Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempore praesentium perspiciatis quidem adipisci iure corrupti
        necessitatibus porro. Eum voluptatibus dolorum beatae tempora, tenetur
        deserunt, accusamus perferendis cum numquam, mollitia suscipit.
      </Typography>
      <Typography variant="body2">
        I am body2 for p tag Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Dolores, veniam! Libero, adipisci non error voluptates consequatur
        doloribus nulla excepturi, necessitatibus optio natus perferendis? Vel
        esse aut quasi eius doloribus voluptate.
      </Typography>
      <Typography variant="h3" component="h1">
        I am h3 semantic with h1
      </Typography>
      <Typography variant="body2" gutterBottom>
        I am body2 for p tag Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Dolores, veniam! Libero, adipisci non error voluptates consequatur
        doloribus nulla excepturi, necessitatibus optio natus perferendis? Vel
        esse aut quasi eius doloribus voluptate.
      </Typography>
      <Typography variant="body2">
        I am body2 for p tag Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Dolores, veniam! Libero, adipisci non error voluptates consequatur
        doloribus nulla excepturi, necessitatibus optio natus perferendis? Vel
        esse aut quasi eius doloribus voluptate.
      </Typography>
    </>
  );
}
