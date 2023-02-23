import { AppBar, Box, Button, Toolbar} from '@mui/material'
import { GetData } from '../../utils/RequestAPI';
import React, { useState, useEffect } from 'react';



function NavBar() {
  return ( 
    <Box>
      <AppBar style={{ background: '#2E2E2E' }}>
        <Toolbar>
        </Toolbar>
      </AppBar> 
      <Toolbar/>
    </Box>
    );
}

export default NavBar;
