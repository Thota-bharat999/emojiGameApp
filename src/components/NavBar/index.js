import './index.css'

const NavBar = props => {
  const {topScore, gameInProcess, currentScore} = props
  return (
    <nav className="navbar-container">
      <div className="nav-heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-img"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>
      <div className="nav-score-container">
        {gameInProcess && (
          <>
            <p className="score-description">Score: {currentScore}</p>
            <p className="top-score-description">Top Score: {topScore}</p>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavBar
