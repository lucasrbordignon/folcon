import { useAuth } from "@/navegation/AuthContext";
import { PublicStackParamList } from "@/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { signUp as singinService } from "../../models/repositories/auth.repository";
import { SiginFormValues } from "./models";

type NavigationProp = StackNavigationProp<PublicStackParamList, 'Register'>;

const useSigninViewModel = (): SiginFormValues => {
  
  const { login } = useAuth();

  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onSubmit = async () => {
    if (!email || !password || !confirmPassword) {
      setError("Preencha todos os campos");
      return;
    }
    if (!email.includes('@')) {
      setError("Email inválido");
      return;
    }
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres");
      return;
    }    
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      setIsLoading(true);
      await singinService({ email, password });
      login();
    } catch (error: any) {
      setError(error.message || 'Erro ao fazer cadastro');
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
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    isLoading,
    onSubmit,
    error,
    goToLogin: () => navigation.navigate('Login')
  };
}

export default useSigninViewModel;