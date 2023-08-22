import { instanceUrl } from './Api-service';
export const token = {
  set: token => {
    instanceUrl.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    instanceUrl.defaults.headers.Authorization = '';
  },
};

export const createNewUser = async body => {
  const { data } = await instanceUrl.post('/users/signup', body);
  return data;
};

export const loginUser = async body => {
  const { data } = await instanceUrl.post('/users/login', body);
  return data;
};

export const logOutUser = async () => {
  const { data } = await instanceUrl.post('/users/logout');
  return data;
};

export const currentInfoUser = async () => {
  const { data } = await instanceUrl.get('/users/current');
  return data;
};
