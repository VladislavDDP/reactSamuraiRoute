import { reduxForm, Field } from "redux-form"
import { isEmpty } from "../validators/validators"
import FormControl from "../common/FormControl"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer"
import { Redirect } from "react-router"
import s from './../common/FormControl.module.css'

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={FormControl} validate={[isEmpty]} type="text" name={'login_email'} placeholder={'Login'} />
                </div>
                <div>
                    <Field component={FormControl} validate={[isEmpty]} type="password" name={'password'} placeholder={'Password'} />
                </div>
                <div>
                    <Field component={'input'} type="checkbox" name={'remember_login'} id='remember_login'  />
                    <label for={'remember_login'}>remember me</label>
                </div>
                <div className={s.error_box}>
                    {props.error}
                </div>
                <button type='submit'>Login</button>
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
        <div>
            { props.isAuth ? <Redirect to={'/profile'} /> : '' }

            <h3>Login page</h3>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuthorized
})

export default connect(mapStateToProps, {login})(Login) 