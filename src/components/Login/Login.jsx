import { reduxForm, Field } from "redux-form"
import { userAuthorization } from "../../redux/authReducer"



const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'input'} type="text" name={'login_email'} placeholder={'Login'} />
                </div>
                <div>
                    <Field component={'input'} type="password" name={'password'} placeholder={'Password'} />
                </div>
                <div>
                    <Field component={'input'} type="checkbox" name={'remember_login'} id='remember_login'  />
                    <label htmlFor="remember_login">remember me</label>
                </div>
                <button type='submit'>Login</button>
            </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login-form'})(LoginForm)


const Login = () => {

    const onSubmit = (data) => {
        const {login_email, password, remember_login} = data
        console.log(login_email, password, remember_login)
        // userAuthorization(login_email, password, remember_login)
    }
    return (
        <div>
            <h3>Login page</h3>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login