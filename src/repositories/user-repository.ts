import { httpClient } from "../libs/http-client";
import { queryKeyMap } from "../libs/react-query";

export const userRepository = {
  async signIn({ account, password }: { account: string; password: string }) {
    return httpClient.post("/users/sign-in", { account, password });
  },

  async signUp({
    account,
    password,
    confirmPassword,
    email,
    phoneNumber,
  }: {
    account: string;
    password: string;
    confirmPassword: string;
    email: string;
    phoneNumber: string;
  }) {
    return httpClient.post("/users", {
      account,
      password,
      confirmPassword,
      email,
      phoneNumber,
    });
  },
};

queryKeyMap.set(userRepository.signUp, ["User"]);
queryKeyMap.set(userRepository.signIn, ["User"]);
