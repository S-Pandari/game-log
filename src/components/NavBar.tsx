import { AppBar, Box, Button, Toolbar} from '@mui/material'
import { GetData } from '../utils/RequestAPI';
import React, { useState, useEffect } from 'react';



function NavBar() {

  const [getData, setData] = useState({});
  /* pokeAPI used for testing lol
  const url = 'https://pokeapi.co/api/v2';
  const params = 'pokemon/ditto'
  const key = ''
  useEffect(() => {
    GetData(url, params, key, setData);
  }, [])
  */


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
