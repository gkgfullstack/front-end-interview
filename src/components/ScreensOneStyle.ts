import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3f5f7a;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
`;

export const PopupContainer = styled.div<{ isClosing: boolean }>`
  background: #3f5f7a;
  border-radius: 8px;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  height: 100%;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s
    ease-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 10px;
  background: none;
  border: none;
  font-size: 40px;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;
