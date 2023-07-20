import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked. */

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    gameInProcess: true,
    topScore: 0,
  }

  finishGameAndTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, gameInProcess: false})
  }

  resetButton = () => {
    this.setState({clickedEmojiList: [], gameInProcess: true})
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojiListLength = clickedEmojiList.length
    if (isEmojiPresent) {
      this.finishGameAndTopScore(clickedEmojiListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiListLength) {
        this.finishGameAndTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getWinOrLoss = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWin = emojisList.length === clickedEmojiList
    return (
      <WinOrLoseCard
        isWon={isWin}
        score={clickedEmojiList.length}
        resetButton={this.resetButton}
      />
    )
  }

  getUnOrderList = () => {
    const shuffledEmoji = this.shuffledEmojisList()
    // console.log(shuffledEmoji)
    // console.log('sudheer')
    return (
      <ul>
        {shuffledEmoji.map(each => (
          <EmojiCard
            emojiDetails={each}
            key={each.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {gameInProcess, topScore, clickedEmojiList} = this.state
    // console.log('sudheer')
    return (
      <>
        <NavBar
          topScore={topScore}
          gameInProcess={gameInProcess}
          currentScore={clickedEmojiList.length}
        />
        <div className="app-container">
          {gameInProcess ? this.getUnOrderList() : this.getWinOrLoss()}
        </div>
      </>
    )
  }
}
export default EmojiGame
