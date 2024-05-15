import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const PowerLineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  position: relative;
`

const PowerLineItem = styled.div`
  width: 120px;
  height: 550px;
  background: #30254d;
  display: flex;
  justify-content: left;
  align-content: center;
  border: 3px solid #fff;
  border-radius: 100px;
  padding: 10px;
`

const Line = styled.div`
  width: 100%;
  border-radius: 100px;
  transition: 100ms;
`

const ControlText = styled.div`
  font-size: 20px;
  color: #e3e3e3;
  margin-top: 20px;
`

interface PowerLineProps {
    playerNumber: string,
    color: string,
    key1: string,
    key2: string,
    pressBtn1: string,
    pressBtn2: string,
    onWin: (playerNumber: string) => void
}

const PowerLine: React.FC<PowerLineProps> = ({
    playerNumber, pressBtn1, pressBtn2, 
    color, key1, key2, onWin
}) => {

  const [line, setLine] = useState(0)
  const [isKeyDown, setIsKeyDown] = useState(false)

  useEffect(() => {
    if (line >= 540) {
      onWin(playerNumber)
    }
  }, [line, playerNumber, onWin])

  let minusPoint = 3

  useEffect(() => {
    if (line <= 0) {
      minusPoint = 0
    } else {
      const interval = setInterval(() => {
        setLine(pv => pv - minusPoint)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [line, minusPoint])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const powerPoints = 3
      if ((event.code === key1 || event.code === key2) && !isKeyDown) {
        setLine(prevValue => prevValue + powerPoints)
        setIsKeyDown(true)
      }
    }
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === key1 || event.code === key2) {
        setIsKeyDown(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [key1, key2, isKeyDown])

  return (
    <PowerLineContainer>
      <PowerLineItem>
          <Line 
          style={{
            height: `${line}px`,
            background: color,
          }}
          />
      </PowerLineItem>
      <ControlText>
        {`Press "${pressBtn1}" or "${pressBtn2}"`}
      </ControlText>
    </PowerLineContainer>
  )
}

export default PowerLine
