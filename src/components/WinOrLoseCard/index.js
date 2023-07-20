import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, resetButton} = props

  const image = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const title = isWon ? 'Best Score' : 'Score'
  const winOrLoss = isWon ? 'You Won' : 'You Lose'
  // const altImage = isWon ? 'win' : ' lose'
  return (
    <div className="win-container">
      <div>
        <h1 className="win-heading">{winOrLoss}</h1>
        <p className="win-description">
          {title} <br />
        </p>
        <p className="span">{score}/12</p>
        <button className="win-button" type="button" onClick={resetButton}>
          Play Again
        </button>
      </div>
      <img src={image} alt="win or lose" className="win-images" />
    </div>
  )
}
export default WinOrLoseCard
