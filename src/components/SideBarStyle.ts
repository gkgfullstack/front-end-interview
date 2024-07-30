import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 0px;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;
export const ListCom = styled.li`
  background-color: transparent;
  color: white;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 5px;
  list-style: none;
`;
export const ListComUL = styled.ul`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;
export const ApiTitle = styled.h2`
  color: white;
  text-align: left;
  margin: 20px 0px 0px;
  padding: 0px;
  font-size: 24px;
`;
export const ButtonArrow = styled.button`
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  text-align: left;
  position: absolute;
  right: 0;

  &:hover {
    background-color: transparent;
  }
  &:svg {
    color: #fff;
  }
`;
export const ButtonSVG = styled.svg`
  background-color: transparent;
  fill: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  text-align: left;
  position: absolute;
  right: 0;
  &:hover {
    background-color: transparent;
  }
`;
export const ApiTitleButton = styled.h5`
  color: yellow;
  text-align: left;
  margin: 0px 0px 0px;
  padding: 10px;
  font-size: 18px;
`;
