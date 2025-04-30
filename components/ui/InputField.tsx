import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

const InputField: React.FC<TextInputProps> = ({...props }) => {
  return (
    <View className="flex-row items-center bg-white my-1 border border-gray-300 rounded-lg px-3 py-2">
      <TextInput
        className="flex-1 text-gray-800"
        placeholderTextColor="#9CA3AF"
        {...props}
      />
    </View>
  );
};

export default InputField;