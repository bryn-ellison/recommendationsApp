import Axios, { InternalAxiosRequestConfig } from "axios";

import { useToast } from "@/hooks/use-toast";
import { env } from "@/config/env";
import { supabaseGetJwt } from "./supabaseClient";

async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Authorization = await supabaseGetJwt();
    config.headers.Accept = "application/json";
  }

  config.withCredentials = true;

  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    const { toast } = useToast();
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
    });

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get("redirectTo");
      window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    }

    return Promise.reject(error);
  }
);
