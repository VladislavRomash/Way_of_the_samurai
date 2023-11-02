import React from 'react';
import style from './Navigation.module.css'

export const Navigation = () => {
    return (
        <nav className={style.nav}>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    );
};