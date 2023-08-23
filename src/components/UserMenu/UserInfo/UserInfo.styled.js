import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkUser = styled(Link)`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
    color: black;
    border-radius: 5px;
  }
  &.active {
    color: orange;
  }
`;

export const UserLogIn = styled.p`
  color: white;
  text-align: center;
  padding: 14px 16px;
`;

export const LogOutButton = styled.button`
  padding: 5px 5px;
  border-radius: 3px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #45a049;
  }
`;
