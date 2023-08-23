import { useEffect } from 'react';
import { selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/ContactAsyncThunk';
import PhoneBook from 'components/PhoneBook/PhoneBook';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContactsThunk);
  }, [dispatch]);
  return isLoading ? <Loader /> : <PhoneBook />;
};

export default ContactsPage;
