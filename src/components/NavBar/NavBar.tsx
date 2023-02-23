import { AppBar, Box, Toolbar, Typography} from '@mui/material'
import { GetData } from '../../utils/RequestAPI';
import React, { useState, useEffect } from 'react';

/*TODO:
  - Add React Router (Obviously)
  - Make it so the navbar doesn't refresh
  - Add Buttons for each page
*/

function NavBar() {
  return ( 
    <Box>
      <AppBar style={{ background: '#2E2E2E' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
          >
            LOGO GOES HERE
          </Typography>
        </Toolbar>
      </AppBar> 
      <Toolbar/>
    </Box>
    );
}

export default NavBar;
