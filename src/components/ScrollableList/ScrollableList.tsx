import { Button, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material'
import { GetData } from '../../utils/RequestAPI';
import React, { useState, useEffect } from 'react';
import { GameData } from '../../interfaces/interfaces';



function ScrollableList() {

  const [getData, setData] = useState();
  const [gameObject, setGameObject] = useState<GameData[]>([]);
  const url = 'https://api.rawg.io/api';
  const params = 'games'
  const key = 'fa18466671df40f3991952f8a57594dd'

  const ClickFunction = () => {
    GetData(url, params, key, setData);
    //@ts-ignore
    console.log(getData['data']['results']);
  };
  useEffect(() => {
    if(getData){
      //@ts-ignore
      setGameObject(getData['data']['results']);
    }
  }, [getData])


  return (
    <div>
    <Button onClick={ClickFunction}>hi</Button>
    <ImageList>
      {gameObject && gameObject.map((item) => (
        <ImageListItem key={item.background_image}>
          <img
            src={`${item.background_image}?w=248&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.name}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.name}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    );
}

export default ScrollableList;
