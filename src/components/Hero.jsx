import { Container, Title, Text, Button, Group } from '@mantine/core'

export default function Hero() {
  return (
    <Container size="md" py="xl">
      <Title order={1}>Marco Islas</Title>

      <Text size="lg" c="dimmed" mt="md">
        Estudiante de Ingeniería en Tecnologías Computacionales.
        Me interesa el desarrollo de software, IA y ciberseguridad.
      </Text>

      <Group mt="lg">
        <Button>Ver proyectos</Button>
        <Button variant="light">Contacto</Button>
      </Group>
    </Container>
  )
}
