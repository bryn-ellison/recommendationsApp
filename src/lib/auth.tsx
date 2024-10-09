import { configureAuth } from "react-query-auth";
import { User } from "@/types/api";
import { brynEllison } from "@/testing/mockData/users";

const getUser = async (): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    return brynEllison;
  });
};

const logout = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    return null;
  });
};

const authConfig = {
  userFn: getUser,
  loginFn: async () => {
    return brynEllison;
  },
  registerFn: async () => {
    return brynEllison;
  },
  logoutFn: logout,
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);
