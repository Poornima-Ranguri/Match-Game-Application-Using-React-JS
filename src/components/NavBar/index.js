import './index.css'

const NavBar = () => {
  console.log('MatchGame')
  return (
    <div className="nav-bar">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="image"
          alt="website logo"
        />
      </div>
      <div className="score-container">
        <p className="score-text">
          score: <span className="score-span-text">0</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="timer-text">42 Sec</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar
