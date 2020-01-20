import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.jpg';
import './Logo.css';
import { tsPropertySignature } from '@babel/types';
const logo = (props) => (
    <div className = "Logo" style = {{height: props.height}}>
        <img src = {burgerLogo} alt = "My Burger"></img>
    </div>
);

export default logo;
