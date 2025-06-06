// PublicStack.tsx
import { LoginView } from '@/common/pages/login/view';
import { RegisterView } from '@/common/pages/signin/view';
import { PublicStackParamList } from '@/types/navigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<PublicStackParamList>();

export const PublicStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginView} />
    <Stack.Screen name="Register" component={RegisterView} />
  </Stack.Navigator>
);