import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const onClickResetGame = () => {
    playAgain()
  }

  return (
    <div className="win-or-lose-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="your-score-text">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickResetGame}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-button"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default WinOrLoseCard
