import React from 'react'
import s from './Footer.module.css'

const Footer = React.memo(() => {
    return (
        <div className={s.footer}>
            Kucheruk Vladislav &copy;2021
        </div>
    )
})

export default Footer