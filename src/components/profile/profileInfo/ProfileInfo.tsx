import React, {FC} from 'react';
import style from './ProfileInfo.module.css'
import {DescriptionType} from '../../../reducers/profileReducer';

type PropsType = {
    description: DescriptionType[]
}

export const ProfileInfo: FC<PropsType> = (props) => {

    const {description} = props

    const mappedDescription = description.map((m, i) =>
        <div key={i}
             className={style.description}>
            <div>
                <img src={m.avatar}
                     alt="My_avatar"
                     className={style.avatar}/>
            </div>
            <div className={style.info}>
                {m.characteristic}
            </div>
        </div>
    )

    return (
        <div className={style.profileInfo}>
            <div>
                <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20200621/pngtree-abstract-modern-neon-frame-background-image_339537.jpg"
                    alt="Wall"/>
            </div>
            <div className={style.descriptionBlock}>
                {mappedDescription}
            </div>
        </div>
    );
};