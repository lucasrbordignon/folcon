import React from "react";
import { Text } from "react-native";

interface SectionTitleProps {
  children: React.ReactNode; // O texto a ser exibido
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <Text className="text-xl font-semibold text-teal-600">
      {children}
    </Text>
  );
}