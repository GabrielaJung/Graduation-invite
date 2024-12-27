import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  background-size: cover;
  padding: 2rem 0;
  background-color: #fff
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;

  & > h1 {
      text-shadow: 5px 2px 8px black;
      }
`;

const pulse = keyframes`
    0%,100% {
       box-shadow: 0px 0px 10px 4px #0f0fff55;
    }
    50% {
       box-shadow: 0px 0px 8px 3px rgba(216, 249, 255, 0.33);
    }

`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  & > section {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;

    &.principal {
      background: var(--bg-shade);
      padding: 0.5rem;
      border-radius: 5px;
      border: 1px solid var(--primary);
      transition: all 4s;
      animation: ${pulse} infinite;
      animation-duration: 4s;
    }

    & > h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    & > .divisionHat > * {
      font-size: 2rem;
      color: var(--primary);
    }

    & > .division {
      background: var(--bg-shade);
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      & > * {
        font-size: 1.2rem;
        color: var(--primary);
      }
    }
  }
`;
