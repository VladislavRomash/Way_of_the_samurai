import React from 'react';
import style from './Navigation.module.css'
import {NavLink} from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className={style.nav}>

            <div className={style.item}>
                <NavLink to={'/profile'}
                         activeClassName={style.activeLink}>Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/dialogs'}
                         activeClassName={style.activeLink}>Dialogs</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/news'}
                         activeClassName={style.activeLink}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/music'}
                         activeClassName={style.activeLink}>Music</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/settings'}
                         activeClassName={style.activeLink}>Settings</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to={'/findusers'}
                         activeClassName={style.activeLink}>Find Users</NavLink>
            </div>

        </nav>
    );
};