import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { logOutUserThunk } from 'redux/UserAsyncThunk';
import { LinkUser, UserLogIn, LogOutButton } from './UserInfo.styled';

const UserInfo = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(logOutUserThunk());
  };
  return (
    user && (
      <>
        <li>
          <LinkUser to="/contacts">Contacts</LinkUser>
        </li>
        <li>
          <UserLogIn>{user.email}</UserLogIn>
        </li>
        <li>
          <LogOutButton type="button" onClick={handleSubmit}>
            Log out
          </LogOutButton>
        </li>
      </>
    )
  );
};

export default UserInfo;
