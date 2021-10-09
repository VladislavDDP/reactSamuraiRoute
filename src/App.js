import s from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import Messages from './components/Messages/Messages'
import News from './components/Navbar/News/News'
import Music from './components/Navbar/Music/Music'
import Settings from './components/Navbar/Settings/Settings'
import Footer from './components/Footer/Footer'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import React from 'react'
import { compose } from 'redux'
import { initializeApp } from './redux/appReducer'
import Preloader from './components/Users/Preloader'

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        }

        const navbar = React.createRef()
        const profile_header = React.createRef()

        return (
            <div className={s.app_wrapper}>
                <HeaderContainer profile_header={profile_header} />
                <Navbar navbar={navbar} />
                <div className={s.content}>
                    <Route path='/profile/:userId?' 
                            render={() => <ProfileContainer />} />
                    <Route path='/messages' 
                            render={() => <Messages />} />
                    <Route path='/login' 
                            render={() => <Login />} />
                    <Route path='/users' 
                            render={() => <UsersContainer />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
                <Footer />
            </div>
      )
  }
}

const mapDispatchToProps = (state) => ({
    isInitialized: state.app.isInitialized
})

export default compose(
    withRouter,
    connect(mapDispatchToProps, {initializeApp})
)(App)
