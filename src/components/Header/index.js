import './index.css'

const Header = props => {
  const {scoreDetails, timeDetails} = props

  return (
    <nav className="nav-bar-container">
      <ul className="nav-list-container">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="website-logo"
          />
        </li>

        <li className="score-timer-container">
          <p className="score-text">
            Score:<span className="value">{scoreDetails}</span>
          </p>
          <li className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-logo"
            />
            <p className="seconds-text">{timeDetails} sec</p>
          </li>
        </li>
      </ul>
    </nav>
  )
}

export default Header
