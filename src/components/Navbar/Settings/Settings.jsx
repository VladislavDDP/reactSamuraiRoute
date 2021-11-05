import s from './Settings.module.css'
import React from 'react'

const Settings = React.memo((props) => {

    return (
        <div className={s.settings}>
            <div>Your Settings</div>
        </div>
    )
})

export default Settings