import React, {FC} from 'react';
import style from './ProfileInfo.module.css'

type PropsType = {}

export const ProfileInfo: FC<PropsType> = (props) => {

    const {} = props

    return (
        <div className={style.profileInfo}>
            <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg"
                alt=""/>

            <div className={style.descriptionBlock}>
                <img src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"
                     alt="Avatar"
                     className={style.avatar}/>
            </div>
        </div>
    );
};