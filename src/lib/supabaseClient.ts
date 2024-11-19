import { createClient } from "@supabase/supabase-js";
import { env } from "@/config/env";
import { LoginInput, RegisterInput } from "./auth";
import { AuthUser } from "@/types/api";
import { api } from "./api-client";

const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseGetJwt = async () => {
  const repsonse = await supabase.auth.getSession();
  const token = `Bearer ${repsonse.data.session?.access_token}`;
  return token;
};

export const supabaseGetUserFromSession = async () => {
  const repsonse = await supabase.auth.getSession();
  const user: AuthUser = {
    id: repsonse.data.session!.user.id,
    email: repsonse.data.session!.user.email!,
    firstName: repsonse.data.session!.user.user_metadata.first_name,
    lastName: repsonse.data.session!.user.user_metadata.last_name,
    userName: repsonse.data.session!.user.user_metadata.user_name,
    role: repsonse.data.session!.user.user_metadata.role,
  };
  return user;
};

export const supabaseLogin = async (loginData: LoginInput) => {
  const { data } = await supabase.auth.signInWithPassword(loginData);
  const user: AuthUser = {
    id: data.user!.id,
    email: data.user!.email!,
    firstName: data.user!.user_metadata.first_name,
    lastName: data.user!.user_metadata.last_name,
    userName: data.user!.user_metadata.user_name,
    role: data.user!.user_metadata.role,
  };
  return user;
};

type ApiSignUpData = {
  id: string;
  userName: string;
  role: "ADMIN" | "USER" | "MODERATOR" | "CURATOR";
};

export const supabaseSignUpUser = async (signupData: RegisterInput) => {
  const { data, error } = await supabase.auth.signUp({
    email: signupData.email,
    password: signupData.password,
    options: {
      data: {
        first_name: signupData.firstName,
        last_name: signupData.lastName,
        user_name: signupData.userName,
        role: "USER",
      },
    },
  });
  const userApiSignupData: ApiSignUpData = {
    id: data.user!.id,
    userName: data.user!.user_metadata.user_name,
    role: data.user!.user_metadata.role,
  };
  await api.post("/Users", userApiSignupData);
  const user: AuthUser = {
    id: data.user!.id,
    email: data.user!.email!,
    firstName: data.user!.user_metadata.first_name,
    lastName: data.user!.user_metadata.last_name,
    userName: data.user!.user_metadata.user_name,
    role: data.user!.user_metadata.role,
  };
  return user;
};

export const supabaseLogout = async () => {
  const { error } = await supabase.auth.signOut();
};
