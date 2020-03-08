import React from 'react';

import classes from './Order.css';

const order = ( props ) => {
    const ingredients = [];

    for ( let ingredientName in props.ingredients ) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        if(ig.name === 'meat')
        {
                ig.name = "고기 패티"
        }
        else if(ig.name === 'salad')
        {
                ig.name = "양상추"
        }
        else if(ig.name === 'cheese')
        {
                ig.name = "치즈"
        }
        else if(ig.name === 'bacon')
        {
                ig.name = "베이컨"
        }
        
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
                }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>추가 재료: {ingredientOutput}</p>
            <p>가격: {props.price}원</p>
        </div>
    );
};

export default order;