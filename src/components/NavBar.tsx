import { AppBar, Box, Button, Toolbar} from '@mui/material'
import { GetData } from '../utils/RequestAPI';
import React, { useState, useEffect } from 'react';



function NavBar() {
  return ( 
    <Box>
      <AppBar>
        <Toolbar>
        </Toolbar>
      </AppBar> 
    </Box>
    );
}

export default NavBar;
