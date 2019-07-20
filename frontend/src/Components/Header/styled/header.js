import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const headerHeight = 40;

export const HeaderS = styled.header`
  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  min-height: ${headerHeight}px;
  background-color: #292d2f;
`;

export const HeaderInnerS = styled.div`
  display: flex;
  align-items: flex-end;

  width: 1000px;
`;

export const HeaderLogoS = styled(Link)`
  padding: 0 10px;
  font-size: 25px;
  color: #fff;
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
  border-bottom: 3px solid transparent;
  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: 500;
  color: #fff;
  line-height: ${headerHeight}px;
  text-decoration: none;
  
  padding: 0 14px;

  &.${activeClassName} {
    border-bottom: 3px solid orange;
  }
`;
