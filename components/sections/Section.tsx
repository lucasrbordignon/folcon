import React from "react";
import { View, ViewProps } from "react-native";

interface SectionProps extends ViewProps {
  children: React.ReactNode; // Conteúdo da seção
}

export default function Section({ children, ...props }: SectionProps) {
  return (
    <View className="my-2" {...props}>
      {children}
    </View>
  );
}