import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { loginUserThunk } from 'redux/UserAsyncThunk';
import Notiflix from 'notiflix';
import { FormLog, LabelLog, InputLog, ButtonLog } from './Login.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const hendleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(loginUserThunk({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch(() => Notiflix.Notify.failure('Wrong login or password !'));
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <FormLog onSubmit={handleSubmit}>
        <LabelLog>
          email
          <InputLog
            type="text"
            onChange={hendleChange}
            name="email"
            value={email}
          />
        </LabelLog>
        <LabelLog>
          password
          <InputLog
            type="password"
            onChange={hendleChange}
            name="password"
            value={password}
          />
        </LabelLog>
        <ButtonLog type="submit">Login</ButtonLog>
      </FormLog>
    </div>
  );
};
export default LoginPage;
