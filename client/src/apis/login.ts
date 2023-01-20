import axiosInstance from '.';

export const login = async (email: string, password: string) => {
  const loginResponse = await axiosInstance.post('login', {
    email,
    password,
  });

  const data = loginResponse.data;

  console.log(data);
};
