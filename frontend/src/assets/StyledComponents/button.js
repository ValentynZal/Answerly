import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  min-width: 100px;
  border-radius: 3px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${props => props.theme.buttonBlueColor};
  border-radius: 4px;
  padding: 5px 10px;
  border-bottom: none;
  margin: 0 5px;
`;
