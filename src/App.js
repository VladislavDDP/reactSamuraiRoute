import s from './App.module.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'
import News from './components/Navbar/News/News'
import Music from './components/Navbar/Music/Music'
import Settings from './components/Navbar/Settings/Settings'
import Footer from './components/Footer/Footer'
import { Route } from 'react-router-dom'

const App = (props) => {
return (
    <div className={s.app_wrapper}>
      <Header />
      <Navbar />
      <div className={s.content}>

        <Route path='/profile' 
                render={() => <Profile 
                                posts={props.state.profilePage.posts} />} />
        <Route path='/messages' 
                render={() => <Messages dialogs={props.state.dialogsPage} />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />

      </div>
      <Footer />
    </div>
  )
}

export default App
