import { Card, Text } from '@mantine/core'

/**
 * Mini card para evidencia: acepta imagen o gif y una descripción.
 * La descripción se muestra en texto ligeramente más pequeño y más sombreado.
 */
export default function EvidenceCard({ src, alt = '', description }) {
  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder>
      <Card.Section>
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </Card.Section>
      {description && (
        <Text
          size="xs"
          c="dimmed"
          mt="xs"
          style={{
            opacity: 0.9,
            lineHeight: 1.4,
          }}
        >
          {description}
        </Text>
      )}
    </Card>
  )
}
