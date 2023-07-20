// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiDetails

  const onClickCardButton = () => {
    onClickEmoji(id)
  }

  return (
    <li>
      <button
        type="button"
        className="emoji-button"
        onClick={onClickCardButton}
      >
        <img src={emojiUrl} alt={emojiName} className="card-image" />
      </button>
    </li>
  )
}
export default EmojiCard
