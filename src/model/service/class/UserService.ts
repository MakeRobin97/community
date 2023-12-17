import axios, { AxiosResponse } from "axios";
import * as UserServiceInterface from "../interface/UserServiceInterface";
import BASE_API from "@/model/config";

export class UserService {
  static async SignUp(
    email: string,
    password: string,
    name: string
  ): Promise<AxiosResponse<UserServiceInterface.SignUpServiceInterface>> {
    const response: AxiosResponse<UserServiceInterface.SignUpServiceInterface> =
      await axios.post(
        `/user/signup`,
        {
          email,
          password,
          name,
        },
        {
          baseURL: `${BASE_API}`,
        }
      );
    return response;
  }

  static async Login(
    email: string,
    password: string
  ): Promise<AxiosResponse<UserServiceInterface.LoginServiceInterface>> {
    const response: AxiosResponse<UserServiceInterface.LoginServiceInterface> =
      await axios.post(
        `/user/login`,
        {
          email,
          password,
        },
        {
          baseURL: `${BASE_API}`,
        }
      );
    return response;
  }

  static async CheckProfileId(): Promise<AxiosResponse<UserServiceInterface.CheckPorfileIdInterface>> {
    const response: AxiosResponse<UserServiceInterface.CheckPorfileIdInterface> =
      await axios.get(`/profile/profileId`, {
        baseURL: `${BASE_API}`,
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });

    return response;
  }

  static async CreateProfile(): Promise<AxiosResponse<UserServiceInterface.CreateProfileInterface>> {
    const response: AxiosResponse<UserServiceInterface.CreateProfileInterface> =
      await axios.post(
        `/profile`,
        {},
        {
          baseURL: `${BASE_API}`,
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
    return response;
  }
}
