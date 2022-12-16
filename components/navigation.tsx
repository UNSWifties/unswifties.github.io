import { AppBar, Toolbar, IconButton, Link, Grid, Typography } from "@mui/material"; 

type NavigationProps = {
  links?: string[]
} 

function Navigation (props: NavigationProps) {

  const { links } = props;

  return(
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Grid container direction="row" spacing="3vw" justifyContent="flex-end">
          { 
            links?.map((link) => 
              <Grid item key={link}>
                <Typography variant="h6">
                  <Link href={`/${link}`} 
                        color="inherit" 
                        underline="none">
                          {link}
                  </Link>
                </Typography>
              </Grid>
            ) 
          }
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;