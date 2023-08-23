import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 50px;
`;

export const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const Linkk = styled(Link)`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const Title = styled.h1`
  margin-left: 45px;
`;

export const TitleName = styled.span`
  color: #32cd32;
`;
