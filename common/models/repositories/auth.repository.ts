import { supabase } from "@/lib/supabaseClient";

export interface loginDTO {
  email: string;
  password: string;
}

export const login = async (data: loginDTO) => {
  const { email, password } = data;

  const { data: user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  
  return user;
}

export const signUp = async (data: loginDTO) => {
  const { email, password } = data;

  const { data: user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  
  return user;
}