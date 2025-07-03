import React from "react";

export interface LoginFormValues {
  email: string;  
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  onSubmit: () => void;
  goToRegister: () => void;
  error?: string;
}