import React, { useEffect, useState } from 'react'

const ProfileStatus = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    
    const turnOnEditMode = () =>  {
        setEditMode(true)
    }

    const turnOffEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const changeStatusText = (event) => {
        setStatus(event.currentTarget.value)
    }

    return (
        <div>
            {
                !editMode
                ? <div onDoubleClick={ turnOnEditMode }>{props.status || '-----'}</div>
                : <div><input onChange={changeStatusText} 
                                autoFocus={true} 
                                onBlur={ turnOffEditMode } 
                                type="text" 
                                value={status} /></div> 
            }
        </div>
    )
}

export default ProfileStatus