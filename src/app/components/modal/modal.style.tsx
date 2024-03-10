import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
  overflow: hidden;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 20px;
  border: 1px solid #01457A;
  box-shadow: 0 0 35px 0 rgba(142, 160, 173, 0.35);
`;

export const Content = styled.div`
  padding: 40px;
  overflow-x: hidden;
  overflow-y: auto;
  color: #01457A;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 1300px){
    width: 80vw;
  }
`;
