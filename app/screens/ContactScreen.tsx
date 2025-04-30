import ScreenHeader from "@/components/layout/HeaderBack";
import Section from "@/components/sections/Section";
import InputField from "@/components/ui/InputField";
import SectionTitle from "@/components/ui/SectionTitle";
import mockData from "@/data/mockData.json";
import { clientListTypes } from "@/types/clientListTypes";
import { useNavigation } from "expo-router";
import { ChevronDown, Info, Plus } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Menu } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function InsertContactScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [lead, setLead] = useState("");
  const [leads, setLeads] = useState<clientListTypes[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<clientListTypes[]>([]);
  const [contactDate, setContactDate] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [channel, setChannel] = useState("");
  const [subject, setSubject] = useState("");
  const [observation, setObservation] = useState("");
  const [budgets, setBudgets] = useState([{ description: "", value: "" }]); // Inicialmente com 1 registro
  const [observationHeight, setObservationHeight] = useState(40);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLeads(mockData.clientes);
      setFilteredLeads(mockData.clientes);
    };

    fetchData();
  }, []);

  const handleSearch = (text: string) => {
    setLead(text);
    const filtered = leads.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredLeads(filtered);
  };

  const handleSelectLead = (selectedLead: clientListTypes) => {
    setLead(selectedLead.name);
    setDropdownVisible(false);
  };

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
            <ScreenHeader
              onBackPress={() => navigation.goBack()}
              topInset={insets.top}
            />
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: insets.top + 80,
                paddingBottom: 20,
              }}
              showsVerticalScrollIndicator={false}
            >
              <View className="flex-1 bg-gray-100 px-4">
                <View className="flex-row justify-between items-center mb-2 mt-4">
                  <Text className="text-teal-900 text-4xl font-semibold">
                    Contato
                  </Text>
                  <TouchableOpacity>
                    <Info size={24} color="#0d9488" />
                  </TouchableOpacity>
                </View>

                <Section>
                  <SectionTitle>Lead</SectionTitle>
                  <Menu
                    visible={dropdownVisible}
                    onDismiss={() => setDropdownVisible(false)}
                    anchor={
                      <View className="flex-1 w-full relative">
                        <InputField
                          readOnly={true}
                          className={`${
                            lead ? "text-gray-800" : "text-gray-400"
                          }`}
                        >
                          {lead || "Selecione um Lead"}
                        </InputField>
                        <View className="absolute inset-y-0 right-2 flex justify-center items-center">
                          <ChevronDown
                            size={24}
                            color="#0d9488"
                            onPress={() => setDropdownVisible(true)}
                          />
                        </View>
                      </View>
                    }
                  >
                    {filteredLeads.map((item) => (
                      <Menu.Item
                        key={item.id}
                        onPress={() => handleSelectLead(item)}
                        title={item.name}
                        titleStyle={{
                          fontSize: 16,
                        }}
                        style={{
                          paddingVertical: 8,
                        }}
                      />
                    ))}
                  </Menu>
                </Section>

                <Section>
                  <SectionTitle>Contato</SectionTitle>

                  <View className="flex-row justify-between w-full gap-2">
                    <View className="flex-1">
                      <InputField
                        placeholder="Data do contato"
                        value={contactDate}
                        onChangeText={setContactDate}
                      />
                    </View>

                    <View className="flex-1">
                      <InputField
                        placeholder="Hora do contato"
                        value={contactTime}
                        onChangeText={setContactTime}
                      />
                    </View>
                  </View>

                  <InputField
                    placeholder="Canal"
                    value={channel}
                    onChangeText={setChannel}
                  />
                </Section>

                <SectionTitle>Interesse</SectionTitle>

                <InputField
                  placeholder="Assunto"
                  value={subject}
                  onChangeText={setSubject}
                />

                <InputField
                  placeholder="Observação"
                  value={observation}
                  onChangeText={setObservation}
                  multiline
                  onContentSizeChange={(event) => {
                    const { height } = event.nativeEvent.contentSize;
                    setObservationHeight(height);
                  }}
                  style={{ height: Math.max(40, observationHeight) }} // Define altura mínima e ajusta dinamicamente
                />

                <Section>
                  <View className="flex-row justify-between items-center">
                    <SectionTitle>Orçamentos</SectionTitle>

                    <TouchableOpacity
                      onPress={handleAddBudget}
                      className="justify-center items-center self-center"
                    >
                      <Plus size={32} color="#0d9488" />
                    </TouchableOpacity>
                  </View>

                  <Text className="text-gray-400 text-sm font-semibold">
                    Adicione os orçamentos
                  </Text>

                  {budgets.map((budget, index) => (
                    <View
                      key={index}
                      className="flex-row justify-between w-full mb-4"
                    >
                      <View className="flex-1">
                        <InputField
                          placeholder="Descrição"
                          value={budget.description}
                          onChangeText={(value) =>
                            handleUpdateBudget(index, "description", value)
                          }
                        />
                      </View>

                      <View className="flex-1">
                        <InputField
                          placeholder="Valor"
                          value={budget.value}
                          onChangeText={(value) =>
                            handleUpdateBudget(index, "value", value)
                          }
                        />
                      </View>
                    </View>
                  ))}
                  <TouchableOpacity
                    onPress={handleAddBudget}
                    className="w-full h-12 bg-teal-600 rounded-lg justify-center items-center self-center mt-4"
                  >
                    <Text className="text-white font-semibold text-xl">
                      Salvar
                    </Text>
                  </TouchableOpacity>
                </Section>
              </View>
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
