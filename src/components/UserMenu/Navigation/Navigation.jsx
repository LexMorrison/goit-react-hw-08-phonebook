import UserInfo from '../UserInfo/UserInfo';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/selectors';

import { Nav, NavUl, Linkk, Title, TitleName } from './Navigation.styled';

const Navigation = () => {
  const user = useSelector(selectUser);
  //если есть selectToken то записываем если нет то пустая строка
  const token = useSelector(selectToken) ?? '';
  return (
    <header>
      <Nav>
        <NavUl>
          {!user && (
            <>
              {token && (
                <li>
                  <Linkk to="/contacts">Contacts</Linkk>
                </li>
              )}
              <li>
                <Linkk to="/signup">Sign up</Linkk>
              </li>
              <li>
                <Linkk to="/login">Login</Linkk>
              </li>
            </>
          )}
          <UserInfo />
        </NavUl>
      </Nav>
      {user ? (
        <Title>
          Welcome back! <TitleName>{user.name}</TitleName>
        </Title>
      ) : (
        <Title>Welcome dear guest!</Title>
      )}
    </header>
  );
};

export default Navigation;
