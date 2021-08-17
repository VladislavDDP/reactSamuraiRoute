import './App.css'
import 'logo.svg'

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://img.icons8.com/ios-filled/2x/dot-logo.png"/>
      </header>
      <nav className='nav'>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>

      <div className='content'>
        <h3>Profile description</h3>
      </div>

    </div>
  )
}

export default App
