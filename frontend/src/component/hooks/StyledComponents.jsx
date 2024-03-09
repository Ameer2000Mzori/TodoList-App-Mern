import styled, { keyframes } from 'styled-components'

// if you want to add or use animations

// const pulseAnimation = keyframes`
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
//   100% {
//     transform: scale(1);
//   }
// `

export const BtnWrap = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const SubmitBtnStyled = styled.button`
  height: 40px;
  width: 150px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  &:active {
    transform: scale(0.95);
  }

  // if you want to add or use animations dont forget the $ for the animation to work.
  // animation: {pulseAnimation} 1s infinite alternate;
`
