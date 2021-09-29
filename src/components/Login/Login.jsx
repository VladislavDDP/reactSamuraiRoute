import { reduxForm, Field } from "redux-form"
import { isEmpty } from "../validators/validators"
import FormControl from "../common/FormControl"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer"

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
                    <Field component={'input'} validate={[isEmpty]} type="checkbox" name={'remember_login'} id='remember_login'  />
                    <label htmlFor="remember_login">remember me</label>
                </div>
                <button type='submit'>Login</button>
            </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login-form'})(LoginForm)


const Login = (props) => {

    const onSubmit = (data) => {
        const {login_email, password, remember_login} = data
        props.login(login_email, password, remember_login)
    }
    return (
        <div>
            <h3>Login page</h3>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, {login})(Login) 