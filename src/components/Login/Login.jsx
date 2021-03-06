import { reduxForm, Field } from "redux-form"
import { isEmpty } from "../validators/validators"
import FormControl from "../common/FormControl"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer"
import { Redirect } from "react-router"
import s from './../common/FormControl.module.css'

const LoginForm = ({error, handleSubmit}) => {
    return (
            <form onSubmit={handleSubmit}>
                <div className={s.login_input}>
                    <Field component={FormControl} validate={[isEmpty]} type="text" name={'login_email'} placeholder={'Login'} />
                </div>
                <div className={s.login_input}>
                    <Field component={FormControl} validate={[isEmpty]} type="password" name={'password'} placeholder={'Password'} />
                </div>
                <div>
                    <Field component={'input'} type="checkbox" name={'remember_login'} id='remember_login'  />
                    <label htmlFor={'remember_login'}>remember me</label>
                </div> 
                { error &&
                    <div className={s.error_box}>
                        {error}
                    </div>
                }
                <br />
                <button type='submit' className={s.login_btn}>Login</button>
            </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login-form'})(LoginForm)


const Login = (props) => {

    const onSubmit = (data) => {
        let {login_email, password, remember_login} = data
        remember_login = remember_login ? true : false
        props.login(login_email, password, remember_login)
    }
    
    return (
        <div className={s.login_container}>
            { props.isAuth ? <Redirect to={'/profile'} /> : '' }
            <h3>Login</h3>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthorized
})

export default connect(mapStateToProps, {login})(Login) 