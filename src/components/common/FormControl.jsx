import s from './FormControl.module.css'

const FormControl = ({input, meta, ...props}) => {
    const status = meta.error && meta.touched
    return (    
            <div>
                <input {...input} {...props} className={s.input + status ? s.error : ''} />
                {status && <span className={s.alert}> {meta.error} </span>}
            </div>
    )
}

export default FormControl