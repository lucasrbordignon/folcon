import { useAuth } from "@/navegation/AuthContext";
import { useState } from "react";
import { login as loginService } from "../../models/repositories/auth.repository";
import { LoginFormValues } from "./models";

const useLoginViewModel = (): LoginFormValues => {
  
  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await loginService({ email, password });
      login();
    } catch (error: any) {
      setError(error.message || 'Erro ao fazer login');
    }
    finally{      
      setIsLoading(false);
    }
  };

  // binding the form values to the view model
  // this way we can use the same form values in the view and the view model
  return {
    email,
    password,
    setEmail,
    setPassword,
    isLoading,
    onSubmit,
    goToRegister: () => {}
  };
}

export default useLoginViewModel;