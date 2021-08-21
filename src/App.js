import s from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'

const App = () => {
  return (
    <div className={s.app_wrapper}>
      <Header />
      <Navbar />
      <div className={s.content}>
        {/*<Profile />*/}
        <Messages />
      </div>
      <Footer />
    </div>
  )
}

export default App
