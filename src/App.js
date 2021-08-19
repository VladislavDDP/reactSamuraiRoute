import s from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'

const App = () => {
  return (
    <div className={s.app_wrapper}>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  )
}

export default App
