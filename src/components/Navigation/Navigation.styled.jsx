import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 12px;
  color: #fff;

  &.active {
    color: #210015;
  }
`;
