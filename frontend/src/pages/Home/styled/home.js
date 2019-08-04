import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainerS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.mainColor};
  height: 100vh;
`;

export const HomeFormS = styled.div`
  width: 600px;
  display: flex;
  background-color: inherit;
  justify-content: center;
  flex-direction: column;
`;

export const HomeLogoS = styled(Link)`
  font-size: 40px;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  line-height: 36px;
  text-align: center;
`;

export const HomeInputS = styled.input`
  border-radius: 3px;
  background-color: ${props => props.theme.secondColor};
  border: 1px solid rgba(0,0,0,.15);
  box-shadow: 0 2px 3px rgba(0,0,0,.06);
  padding-left: .75em;
  padding-right: .75em;
  color: #fff;
  height: 38px;
  margin-top: 25px;
  margin-bottom: 8px;
`;

export const HomeButtonsContainerS = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const HomeButtonS = styled(Link)`
  background-color: ${props => props.theme.buttonDarkColor};
  border: 1px solid rgba(0,0,0,.15);
  box-shadow: 0 2px 3px rgba(0,0,0,.06);
  color: #d7d7d7;
  text-decoration: none;
  padding: 5px 30px;
  min-width: 100px;
  display: flex;
  justify-content: center;

  :hover {
    color: #fff;
  }
`;
