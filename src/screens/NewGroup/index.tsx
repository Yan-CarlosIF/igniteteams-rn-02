import { Header } from "@/components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@/storage/group/groupCreate";
import { AppError } from "@/utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");
  const { navigate } = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe o nome da turma");
      }

      await groupCreate(group.trim());
      navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possivel criar um novo grupo");
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input
          value={group}
          onChangeText={setGroup}
          placeholder="Nome da turma"
        />
        <Button
          disabled={group.trim().length === 0}
          onPress={handleNew}
          style={{ marginTop: 20 }}
          title="Criar"
        />
      </Content>
    </Container>
  );
}
