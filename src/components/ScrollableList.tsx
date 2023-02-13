import { AppBar, Box, Button, Toolbar} from '@mui/material'
import { GetData } from '../utils/RequestAPI';
import React, { useState, useEffect } from 'react';



function ScrollableList() {

  const [getData, setData] = useState({});
  const url = 'https://api.rawg.io/api';
  const params = 'games'
  const key = 'fa18466671df40f3991952f8a57594dd'
  useEffect(() => {
    GetData(url, params, key, setData);
  }, []);
  useEffect(() => {
    console.log(getData);
  }, [getData])


  return ( 
        <Button>hi</Button>
    );
}

export default ScrollableList;
