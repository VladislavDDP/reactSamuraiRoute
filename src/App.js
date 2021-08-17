import './App.css'
import 'logo.svg'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App
