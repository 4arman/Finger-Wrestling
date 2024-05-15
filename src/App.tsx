import styled from "styled-components"
import Game from "./components/Game"

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <Container>
      <Game />
    </Container>
  )
}
