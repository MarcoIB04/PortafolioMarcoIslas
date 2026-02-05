import { Card, Title, Text, Chip, Group, Stack } from '@mantine/core'
import EvidenceCard from './EvidenceCard'

/**
 * Card de proyecto: título, chips de clasificación, rol, ubicación, fechas,
 * descripción (texto que escribes tú) y mini cards de evidencia (imagen/gif + descripción).
 */
export default function ProjectCard({
  title,
  chips = [],
  role,
  location,
  dateRange,
  description,
  evidence = [],
}) {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Stack gap="md">
        <div>
          <Title order={3} mb="xs">
            {title}
          </Title>
          {chips.length > 0 && (
            <Group gap="xs" mb="xs">
              {chips.map((label) => (
                <Chip key={label} size="xs" variant="light" checked readOnly>
                  {label}
                </Chip>
              ))}
            </Group>
          )}
          <Text size="sm" fw={500}>
            {role}
          </Text>
          <Text size="xs" c="dimmed">
            {location}
          </Text>
          {dateRange && (
            <Text size="xs" c="dimmed">
              {dateRange}
            </Text>
          )}
        </div>

        {description && (
          <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-line' }}>
            {description}
          </Text>
        )}

        {evidence.length > 0 && (
          <Stack gap="md">
            {evidence.map((item, i) => (
              <EvidenceCard
                key={i}
                src={item.src}
                alt={item.alt}
                description={item.description}
              />
            ))}
          </Stack>
        )}
      </Stack>
    </Card>
  )
}
