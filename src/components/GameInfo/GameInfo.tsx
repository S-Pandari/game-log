import React, { useState } from 'react';
import { Button } from '@mui/material';
import { GameData } from '../../interfaces/interfaces';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

export function GameInfo(){

    const [getExample, setExample] = useState(0);

    const file = require('./info.json') as GameData;

    console.log(file.id);
    
    return(
        <div>
            <Button
                onClick={() => setExample(getExample + 1)}
            >click me</Button>
            <div>{getExample}</div>
        </div>
    );
}

export default GameInfo;