import { AuthProvider, useAuth } from '@/navegation/AuthContext';
import { PrivateStack } from '@/navegation/PrivateStack';
import { PublicStack } from '@/navegation/PublicStack';
import React from 'react';

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <PrivateStack /> : <PublicStack />}
    </>
  );
};

const AppNavigator = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default AppNavigator;