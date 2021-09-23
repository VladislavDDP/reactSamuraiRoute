import { reduxForm } from "redux-form"



const LoginForm = () => {
    return (
            <form action="">
                <div><input type="text" placeholder={'Login'} /></div>
                <div><input type="password" placeholder={'Password'} /></div>
                <div>Remember me<input type="checkbox" /></div>
                <button type='submit'>Login</button>
            </form>
    )
}

const ReduxLoginForm = reduxForm({form: 'login-form'})(LoginForm)

const Login = () => {
    return (
        <div>
            <h3>Login page</h3>
            <ReduxLoginForm />
        </div>
    )
}

export default Login