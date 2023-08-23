import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentInfoUserThunk } from 'redux/UserAsyncThunk';
import { PublicRoute } from './UserMenu/PublicRoute';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import Navigation from './UserMenu/Navigation/Navigation';
const Registration = lazy(() => import('../Pages/Registration/Registration'));
const Login = lazy(() => import('../Pages/Login/Login'));
const Contacts = lazy(() => import('../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentInfoUserThunk());
  }, [dispatch]);
  return (
    <div>
      <Suspense>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
