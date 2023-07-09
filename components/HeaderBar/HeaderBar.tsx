'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const HeaderBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Nasa Images Experience |
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ marginLeft: '0.5rem' }}
          >
            Favourites
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
