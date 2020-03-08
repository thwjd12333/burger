import React, { Component } from 'react';

import Aux from '../../../hoc/Au_';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate()
    {
        console.log('[OrderSummary] will Update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {   
               
                let keyName ;
                if(igKey === 'meat')
                {                   
                    keyName = "고기 패티"
                }
                else if(igKey === 'salad')
                {
                    keyName = "양상추"
                }
                else if(igKey === 'cheese')
                {
                    keyName = "치즈"
                }
                else if(igKey === 'bacon')
                {
                    keyName = "베이컨"
                }             
                return (
                    <li key={igKey}>
                        <span >{keyName}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });
        return (
        <Aux>
            <h3>주문 내역</h3>
            <p>신선한 재료로 만든 맛있는 햄버거 : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>결제 금액 : {this.props.price.toFixed(0)}원</strong> </p>
            <p>결제 하시겠습니까?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>취소</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>다음</Button>
        </Aux>);
    }

   
}
export default OrderSummary;