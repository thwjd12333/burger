import React from 'react';

import classes from './BuildControl.css';
const buildControl = (props)=>(
    <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>        
        <button className={classes.Less}
         onClick = {props.removed}
         disabled = {props.disabled}>제거</button>
        <button className = {classes.More} onClick = {props.added}>추가</button>

    </div>
);

export default buildControl;