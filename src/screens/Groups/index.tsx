import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Highlight } from "@/components/Highlight";
import { GroupCard } from "@/components/GroupCard";

export function Groups() {
  const handleTest = () => {
    console.log("test");
  };

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard onPress={handleTest} title="Lenda" />
    </Container>
  );
}
