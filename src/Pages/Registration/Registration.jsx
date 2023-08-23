import Notiflix from 'notiflix';
import { useState } from 'react';
import { selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUserThunk } from 'redux/UserAsyncThunk';
import { FormReg, LabelReg, InputReg, ButtonS } from './Registration.styled';

const Registration = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;

      default:
        throw new Error();
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(createNewUserThunk({ email, password, name }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
        setName('');
      })
      .catch(() => Notiflix.Notify.failure('Ooops, something went wrong !'));
  };
  return isLoading ? (
    <Loader />
  ) : (
    <FormReg onSubmit={handleSubmit}>
      <LabelReg>
        name
        <InputReg
          type="text"
          onChange={handleChange}
          name="name"
          value={name}
        />
      </LabelReg>
      <LabelReg>
        email
        <InputReg
          type="text"
          onChange={handleChange}
          name="email"
          value={email}
        />
      </LabelReg>
      <LabelReg>
        password
        <InputReg
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
      </LabelReg>
      <ButtonS type="submit">Sign up</ButtonS>
    </FormReg>
  );
};
export default Registration;
