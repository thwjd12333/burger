import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>버거 구성</NavigationItem>
        <NavigationItem link="/orders">주문 내역</NavigationItem>
    </ul>
);

export default navigationItems;