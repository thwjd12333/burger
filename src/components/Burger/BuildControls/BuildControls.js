import React from 'react';
import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label : '샐러드', type : 'salad'},
    {label : '베이컨', type : 'bacon'},
    {label : '치즈', type : 'cheese'},
    {label : '고기 패티', type : 'meat'},
];
const buildControls = (props)=> (
        <div className = {classes.BuildControls}>
            <p>총 가격: <strong>{props.price.toFixed(0)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}               
                added = {() => props.ingredientAdded(ctrl.type)}
                removed = {() => props.ingredientRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                />
            ))}
            <button 
            className = {classes.OrderButton}
            disabled = {!props.purchasable}
            onClick={props.ordered}>주문 진행</button>
        </div>

);

export default buildControls;