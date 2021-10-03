import s from './FormControl.module.css'

const FormControl = ({input, meta, ...props}) => {
    const status = meta.error && meta.touched
    return (    
        <div className={s.form}>
            {status && <div className={s.error_alert}> {meta.error} </div>}
            <input value={meta.submiting ? '' : input.value } {...input} {...props} 
                    className={s.input + ' ' +  (status ? s.error : '')} />
        </div>
    )
}

export default FormControl