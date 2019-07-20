import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const headerHeight = 50;

export const HeaderS = styled.header`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  min-height: ${headerHeight}px;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 3px 2px -2px rgba(200,200,200,0.2);
`;

export const HeaderInnerS = styled.div`
  display: flex;
  align-items: flex-end;

  width: 1000px;
`;

export const HeaderLogoS = styled(Link)`
  padding: 0 10px;
  font-size: 25px;
  color: #ff0000;
  font-weight: 700;
  text-decoration: none;
  line-height: ${headerHeight}px;
`;

export const HeaderNavS = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 8px;
  height: 100%;
`;

const activeClassName = 'header-nav-item-active';

export const HeaderNavItemS = styled(NavLink).attrs({
  activeClassName,
})`
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: #666;
  line-height: 50px;
  text-decoration: none;
  
  padding: 0 14px;

  &.${activeClassName} {
    border-color: #b92b27;
  }
`;
