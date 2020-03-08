import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>최선을 다해 맛있게 만들어 드리겠습니다!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked ={props.checkoutCancelled}>취소</Button>
            <Button 
                btnType="Success"
                clicked = {props.checkoutContinued}>다음</Button>
        </div>
    );
}

export default checkoutSummary;