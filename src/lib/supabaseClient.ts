import { createClient } from "@supabase/supabase-js";
import { env } from "@/config/env";
import { LoginInput, RegisterInput } from "./auth";
import { AuthResponse } from "@/types/api";

const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseLogin = async (loginData: LoginInput) => {
  const { data } = await supabase.auth.signInWithPassword(loginData);
  console.log(data);
  const authResponse: AuthResponse = {
    jwt: data.session!.access_token,
    user: {
      id: data.user!.id,
      email: data.user!.email!,
      firstName: data.user!.user_metadata.first_name,
      lastName: data.user!.user_metadata.last_name,
      userName: data.user!.user_metadata.user_name,
      role: data.user!.user_metadata.role,
    },
  };

  return authResponse;
};

export const supabaseSignUpUser = async (signupData: RegisterInput) => {
  console.log(signupData);
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
  console.log(data);
  const authResponse: AuthResponse = {
    jwt: data.session!.access_token,
    user: {
      id: data.user!.id,
      email: data.user!.email!,
      firstName: data.user!.user_metadata.first_name,
      lastName: data.user!.user_metadata.last_name,
      userName: data.user!.user_metadata.user_name,
      role: data.user!.user_metadata.role,
    },
  };
  return authResponse;
};

export const supabaseLogout = async () => {
  const { error } = await supabase.auth.signOut();
};
