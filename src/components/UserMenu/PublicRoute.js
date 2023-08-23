import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  const location = useLocation();
  //если есть location.state.from то идем по пути если нет то на контакты
  return token ? (
    <Navigate to={location.state?.from ?? '/contacts'} />
  ) : (
    <Outlet />
  );
};
