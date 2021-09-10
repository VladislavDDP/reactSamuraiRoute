import s from './App.module.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import Messages from './components/Messages/Messages'
import News from './components/Navbar/News/News'
import Music from './components/Navbar/Music/Music'
import Settings from './components/Navbar/Settings/Settings'
import Footer from './components/Footer/Footer'
import { Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
      <div className={s.app_wrapper}>
        <Header />
        <Navbar />
        <div className={s.content}>

          <Route path='/profile/:userId?' 
                  render={() => <ProfileContainer />} />
          <Route path='/messages' 
                  render={() => <Messages />} />
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

export default App
