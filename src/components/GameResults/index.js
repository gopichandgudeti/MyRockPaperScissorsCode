import {
  GameResultsContainer,
  ChoicesContainer,
  ResultText,
  ResultImageItem,
  PlayAgainButton,
  ResultImageContainer,
} from './styledComponent'

const GameResults = props => {
  const {myChoise, apponentChoice, resultText, onPlayAgain} = props
  const {id, imageUrl} = apponentChoice

  const onClickPlayAgain = () => {
    onPlayAgain()
  }

  return (
    <GameResultsContainer>
      <ChoicesContainer>
        <ResultImageContainer>
          <ResultText>YOU</ResultText>
          <ResultImageItem src={myChoise[1]} alt="your choice" />
        </ResultImageContainer>

        <ResultImageContainer>
          <ResultText>OPPONENT</ResultText>
          <ResultImageItem src={imageUrl} alt="opponent choice" />
        </ResultImageContainer>
      </ChoicesContainer>
      <ResultText>{resultText}</ResultText>
      <PlayAgainButton type="button" onClick={onClickPlayAgain}>
        Play Again
      </PlayAgainButton>
    </GameResultsContainer>
  )
}

export default GameResults
