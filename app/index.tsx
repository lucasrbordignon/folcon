import AppNavigator from '@/navegation/AppNavigator';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import '../styles/global.css';

export default function App() {
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
  }, []);
  
  return <AppNavigator />
}