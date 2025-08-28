import { Header } from "@/components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const { navigate } = useNavigation();

  function handleNew() {
    navigate("players", { group: "Galera da VOTU" });
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

        <Input placeholder="Nome da turma" />
        <Button onPress={handleNew} style={{ marginTop: 20 }} title="Criar" />
      </Content>
    </Container>
  );
}
