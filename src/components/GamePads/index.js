import {OptionListItem, GamepadButton, GamePadImage} from './styledComponent'

const GamePads = props => {
  const {choiceDetail, onSelectGamePad} = props
  const {id, image} = choiceDetail
  const lowerCaseId = id.toLowerCase()

  const onClickGamePad = () => {
    onSelectGamePad(id, image)
  }

  return (
    <OptionListItem>
      <GamepadButton
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickGamePad}
      >
        <GamePadImage src={image} alt={id} />
      </GamepadButton>
    </OptionListItem>
  )
}

export default GamePads
