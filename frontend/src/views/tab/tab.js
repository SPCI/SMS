import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

let style = {
    backgroundColor: 'white',
    color: 'gray'
};

export default () => (
    <Tabs>
        <Tab label="Personal Data" style={style}/>
        <Tab label="Next of Kin" style={style}/>
        <Tab label="Payment Status" style={style}/>
        <Tab label="Result" style={style}/>
    </Tabs>
);

