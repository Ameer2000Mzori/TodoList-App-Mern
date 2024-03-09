import styled, { keyframes } from 'styled-components'

// if you want to add or use animations

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

export const AddNewTodoStyled = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 35px;
  width: 35px;
  color: white;
  transition: all 100ms;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: white;

  &:hover {
    color: black;
  }

  &:active {
    transform: scale(0.95);
  }

  animation: ${pulseAnimation} 1s infinite alternate;
`
