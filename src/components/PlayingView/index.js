import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GamePads from '../GamePads'
import GameResults from '../GameResults'

import 'reactjs-popup/dist/index.css'

import {
  AppBgContainer,
  ScoreContainer,
  RockPaperScissorsUnorderedList,
  ListItem,
  ScoreCard,
  ScoreText,
  OptionsListContainer,
  PopupContainer,
  RulesImageContainer,
  CloseLineContainer,
  CloseButton,
  RulesImage,
  PopupButton,
} from './styledComponent'

class PlayingView extends Component {
  state = {
    score: 0,
    isplayAgainClicked: false,
    myChoice: {},
    apponentChoice: {},
    resultText: '',
  }

  onPlayAgain = () => this.setState({isplayAgainClicked: false})

  renderGameResultsView = () => {
    const {myChoice, apponentChoice, resultText} = this.state

    const {id, image} = apponentChoice
    return (
      <GameResults
        myChoice={myChoice}
        apponentChoice={apponentChoice}
        resultText={resultText}
        onPlayAgain={this.onPlayAgain}
      />
    )
  }

  onSelectId = (id, image) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isplayAgainClicked: true,
        score: prevState.score - 1,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultText: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        isplayAgainClicked: true,
        score: prevState.score + 1,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultText: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        isplayAgainClicked: true,
        score: prevState.score - 1,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultText: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        isplayAgainClicked: true,
        score: prevState.score + 1,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultText: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        isplayAgainClicked: true,
        score: prevState.score - 1,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultText: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        isplayAgainClicked: true,
        score: prevState.score + 1,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultText: 'YOU WON',
      }))
    } else {
      this.setState(
        {
        isplayAgainClicked: true,
        myChoice: [id, image],
        apponentChoice: choicesList[number],
        resultText: 'IT IS DRAW',
      })
    }
  }

  renderPlayingView = () => {
    const {choicesList} = this.props

    return (
      <OptionsListContainer>
        {choicesList.map(eachChoice => (
          <GamePads
            key={eachChoice.id}
            choiceDetail={eachChoice}
            onSelectGamePad={this.onSelectId}
          />
        ))}
      </OptionsListContainer>
    )
  }

  render() {
    const {score, isplayAgainClicked, myChoice, apponentChoice} = this.state

    return (
      <AppBgContainer>
        <ScoreContainer>
          <RockPaperScissorsUnorderedList>
            <ListItem>ROCK</ListItem>
            <ListItem>PAPER</ListItem>
            <ListItem>SCISSORS</ListItem>
          </RockPaperScissorsUnorderedList>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <ScoreText>{score}</ScoreText>
          </ScoreCard>
        </ScoreContainer>
        {isplayAgainClicked
          ? this.renderGameResultsView()
          : this.renderPlayingView()}
        <PopupContainer>
          <Popup modal trigger={<PopupButton type="button">Rules</PopupButton>}>
            {close => (
              <RulesImageContainer>
                <CloseLineContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                </CloseLineContainer>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesImageContainer>
            )}
          </Popup>
        </PopupContainer>
      </AppBgContainer>
    )
  }
}

export default PlayingView
