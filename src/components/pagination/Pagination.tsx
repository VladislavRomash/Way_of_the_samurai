import React, {FC} from 'react';
import style from './Pagination.module.css';

interface Props {
    portion: number
    totalUsers: number
    currentPage: number
    maxSizeScale: number
    minSizeScale: number
    onChangePage: (currentPage: number) => void
}

export const Pagination: FC<Props> = ({
                                          portion,
                                          totalUsers,
                                          currentPage,
                                          maxSizeScale,
                                          minSizeScale,
                                          onChangePage
                                      }: Props) => {

    const maxCountPages = Math.ceil(totalUsers / portion)

    const pagesCount = []

    for (let i = minSizeScale; i <= maxSizeScale; i++) {
        pagesCount.push(i)
    }

    return (
        <div className={style.main}>
            {
                pagesCount.map(m => <span key={m}
                                          className={m === currentPage ? `${style.currentPage} ${style.beginScale}` : style.beginScale}
                                          onClick={() => onChangePage(m)}>{m}</span>)
            }

            <span className={style.maxValue}>... {maxCountPages}</span>
        </div>
    )
}