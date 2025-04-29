import Header from "@/components/Header";
import { useNavigation } from "expo-router";
import { ChevronLeft, Info, Plus } from "lucide-react-native";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function InsertContactScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [client, setClient] = useState("");
  const [contactDate, setContactDate] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [channel, setChannel] = useState("");
  const [subject, setSubject] = useState("");
  const [observation, setObservation] = useState("");
  const [budgets, setBudgets] = useState([{ description: "", value: "" }]); // Inicialmente com 1 registro
  const [observationHeight, setObservationHeight] = useState(40);

  const handleAddBudget = () => {
    const lastBudget = budgets[budgets.length - 1];
    if (
      lastBudget.description.trim() === "" ||
      lastBudget.value.trim() === ""
    ) {
      alert("Preencha os campos antes de adicionar um novo orçamento.");
      return;
    }
    setBudgets([...budgets, { description: "", value: "" }]);
  };

  const handleUpdateBudget = (
    index: number,
    field: "description" | "value",
    value: string
  ) => {
    const updatedBudgets = [...budgets];
    updatedBudgets[index][field] = value;
    setBudgets(updatedBudgets);
  };

  const handleRemoveBudget = (index: number) => {
    const updatedBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(updatedBudgets);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <View>
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                backgroundColor: "white",
                paddingBottom: 10,
              }}
            >
              <Header />
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute left-2 z-10"
                style={{
                  position: "absolute",
                  left: 10,
                  top: insets.top + 14,
                  zIndex: 20,
                }}
              >
                <ChevronLeft size={48} color="#0d9488" />
              </TouchableOpacity>
            </View>

            <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: insets.top + 80, // Espaço para o Header fixo
              paddingBottom: 20,
            }}
            showsVerticalScrollIndicator={false}
            >
              <View className="flex-1 bg-gray-100 px-4">
                <View className="flex-row justify-between items-center mb-4 mt-4">
                  <Text className="text-teal-900 text-4xl font-semibold">
                    Contato
                  </Text>
                  <TouchableOpacity>
                    <Info size={32} color="#0d9488" />
                  </TouchableOpacity>
                </View>

                {/* Campo Cliente */}
                <View className="mb-6">
                  <Text className="text-xl font-semibold text-teal-600 mb-2">
                    Cliente
                  </Text>
                  <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                    <TextInput
                      placeholder="Cliente"
                      className="flex-1 text-gray-800"
                      placeholderTextColor="#9CA3AF"
                      value={client}
                      onChangeText={setClient}
                    />
                  </View>
                </View>
                <View className="mb-6">
                  <Text className="text-xl font-semibold text-teal-600 mb-2">
                    Contato
                  </Text>
                  <View className="flex-row justify-between w-full gap-4">
                    <View className="flex-1">
                      <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                        <TextInput
                          placeholder="Data do contato"
                          className="flex-1 text-gray-800"
                          placeholderTextColor="#9CA3AF"
                          value={contactDate}
                          onChangeText={setContactDate}
                        />
                      </View>
                    </View>

                    <View className="flex-1">
                      <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                        <TextInput
                          placeholder="Hora do contato"
                          className="flex-1 text-gray-800"
                          placeholderTextColor="#9CA3AF"
                          value={contactTime}
                          onChangeText={setContactTime}
                        />
                      </View>
                    </View>
                  </View>

                  <View className="mt-4">
                    <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                      <TextInput
                        placeholder="Canal"
                        className="flex-1 text-gray-800"
                        placeholderTextColor="#9CA3AF"
                        value={channel}
                        onChangeText={setChannel}
                      />
                    </View>
                  </View>
                </View>

                <View className="mb-6">
                  <View className="mb-6">
                    <Text className="text-xl font-semibold text-teal-600 mb-2">
                      Interesse 
                    </Text>
                    <View className="mb-4">
                      <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                        <TextInput
                          placeholder="Assunto"
                          className="flex-1 text-gray-800"
                          placeholderTextColor="#9CA3AF"
                          value={subject}
                          onChangeText={setSubject}
                        />
                      </View>
                    </View>

                    <View>
                      <View className="flex-row items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
                        <TextInput
                          placeholder="Observação"
                          className="flex-1 text-gray-800"
                          placeholderTextColor="#9CA3AF"
                          value={observation}
                          onChangeText={setObservation}
                          multiline
                          onContentSizeChange={(event) => {
                            const { height } = event.nativeEvent.contentSize;
                            setObservationHeight(height); // Atualiza a altura dinamicamente
                          }}
                          style={{ height: Math.max(40, observationHeight) }} // Define altura mínima e ajusta dinamicamente
                        />
                      </View>
                    </View>
                  </View>

                  {/* Campo Orçamentos */}
                  <View className="mb-6">
                    <View className="flex-row justify-between items-center">
                      <Text className="text-xl font-semibold text-teal-600">
                        Orçamentos
                      </Text>
                      <TouchableOpacity
                        onPress={handleAddBudget}
                        className="justify-center items-center self-center mb-2"
                      >
                        <Plus size={32} color="#0d9488" />
                      </TouchableOpacity>
                    </View>

                    {budgets.map((budget, index) => (
                      <View
                        key={index}
                        className="flex-row justify-between w-full mb-4"
                      >
                        <View className="flex-1">                        
                          <View className="flex-row items-center bg-white border border-r-0 border-gray-300 rounded-l-lg px-3 py-2">
                            <TextInput
                              placeholder="Descrição"
                              className="flex-1 text-gray-800"
                              placeholderTextColor="#9CA3AF"
                              value={budget.description}
                              onChangeText={(value) =>
                                handleUpdateBudget(index, "description", value)
                              }
                            />
                          </View>
                        </View>

                        <View className="flex-1">                        
                          <View className="flex-row items-center bg-white border border-l-0 border-gray-300 rounded-r-lg px-3 py-2">
                            <TextInput
                              placeholder="Valor"
                              className="flex-1 text-gray-800"
                              placeholderTextColor="#9CA3AF"
                              value={budget.value}
                              onChangeText={(value) =>
                                handleUpdateBudget(index, "value", value)
                              }
                            />
                          </View>
                        </View>
                      </View>
                    ))}        
                    <TouchableOpacity
                      onPress={handleAddBudget}
                      className="w-full h-12 bg-teal-600 rounded-lg justify-center items-center self-center mt-4"
                    >
                      <Text className="text-white font-semibold text-xl">Salvar</Text>
                    </TouchableOpacity>          
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
