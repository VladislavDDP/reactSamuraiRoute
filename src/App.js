import s from './App.module.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

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
