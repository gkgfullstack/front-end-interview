import React, { useState } from 'react';
import SideBar from './SideBar';
import {
  Wrapper,
  Button,
  Overlay,
  PopupContainer,
  CloseButton,
} from './ScreensOneStyle';

const ScreensOne: React.FC = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenSidebar(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <Wrapper>
      <Button onClick={() => setOpenSidebar(true)}>Explore web APIs</Button>
      {openSidebar && (
        <Overlay>
          <PopupContainer isClosing={isClosing}>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            <SideBar />
          </PopupContainer>
        </Overlay>
      )}
    </Wrapper>
  );
};

export default ScreensOne;
