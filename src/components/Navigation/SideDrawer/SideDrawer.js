import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxi from '../../../hoc/AuxiHoc/Auxi';

const sideDrawer  = (props) => {
    let attachedClasses = [ "SideDrawer", "Close"];
    if(props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Auxi>
            <Backdrop show = {props.open} clicked = {props.closed}/>
                <div className = {attachedClasses.join(' ')}>
                    {/* <Logo height = "11%" style = {margin-bottom: 32px}/> */}
                    <Logo height = "30%" />
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
        </Auxi>
    )
};

export default sideDrawer;