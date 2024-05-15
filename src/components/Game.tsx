import { useState } from 'react'
import styled from 'styled-components'
import PowerLine from './PowerLine'
import BackgroundImg from "../assets/images/background.jpg"

const GameItem = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center; 
`

const PowerLineBlock = styled.div`
  display: flex;
  position: relative;
`

const FullscreenText = styled.div`
  font-size: 20px;
  color: #fff;
  position: absolute;
  top: 30px;
  right: 30px;
`

const WinnerTextBlock = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #30254d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
`

const WinnerText = styled.div`
  font-size: 80px;
  color: #ffffff;
`

const RestartText = styled.div`
  font-size: 30px;
  color: #ffffff;
  margin-top: 20px;
`

const Player1Text = styled.span`
  font-size: 40px;
  color: #ffffff;
  width: 100%;
  position: absolute;
  top: 46%;
  right: 5px;
  z-index: 10;
  transform: rotate(-90deg);
`

const Player2Text = styled.span`
  font-size: 40px;
  color: #ffffff;
  width: 100%;
  position: absolute;
  top: 46%;
  left: 5px;
  z-index: 10;
  transform: rotate(90deg);
`

export default function Game() {

  const [winner, setWinner] = useState(null)

  const handleWin = (playerNumber: any) => {
    setWinner(playerNumber)
  }

  return (
    <GameItem>

      {winner && (
        <WinnerTextBlock>
          <WinnerText>
            {winner} wins!
          </WinnerText>
          <RestartText>Press "F5" to restart :)</RestartText>
      </WinnerTextBlock>
      )}

    <FullscreenText>Press "F11" to fullscreen mode</FullscreenText>

      <PowerLineBlock>
        <Player1Text>Player 1</Player1Text>
        <PowerLine 
          playerNumber="Player 1"
          color="#2e58e5"
          key1="KeyA"
          key2="KeyD"
          pressBtn1='A'
          pressBtn2='D'
          onWin={handleWin}
        />
      </PowerLineBlock>
      
      <PowerLineBlock>
        <Player2Text>Player 2</Player2Text>
        <PowerLine 
          playerNumber="Player 2"
          color="#e52e2e"
          key1="ArrowLeft"
          key2="ArrowRight"
          pressBtn1='Left'
          pressBtn2='Right'
          onWin={handleWin}
        />
      </PowerLineBlock>

    </GameItem>
  )
}
