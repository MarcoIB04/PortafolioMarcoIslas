import { Title, Text, Stack, Avatar, Box } from '@mantine/core'
import profileImg from '../assets/profile.jpg'

const ABOUT_PARAGRAPHS = [
  'I am a Software Engineer with a strong passion for video games and game development, where creativity and technical problem-solving naturally intersect. I enjoy exploring how ideas become interactive experiences, from designing gameplay systems to building the underlying software that supports them.',
  'Beyond game development, I am deeply interested in artificial intelligence, software architecture, and project management. I like to experiment and innovate across different areas of software, working on diverse projects that challenge me to learn new tools, approaches, and ways of thinking. This curiosity drives me to continuously improve both my technical skills and my ability to design well-structured, scalable systems.',
  'I have experience developing games, AI-driven solutions, and web and mobile applications, often within agile environments where collaboration and clear communication are essential. I\'m comfortable taking on roles that combine hands-on development with coordination and leadership, ensuring that ideas move efficiently from concept to execution.',
  "At my core, I'm motivated by building software that blends technical rigor, creativity, and thoughtful design, and by contributing to projects where innovation, structure, and teamwork come together to create impactful digital solutions.",
]

const bubbleStyles = {
  maxWidth: '85%',
  alignSelf: 'flex-start',
  borderRadius: 18,
  borderTopLeftRadius: 4,
  padding: '12px 16px',
  backgroundColor: 'var(--mantine-color-default)',
  border: '1px solid var(--mantine-color-default-border)',
  position: 'relative',
  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
}

export default function Profile() {
  return (
    <Stack gap="xl">
      <Stack gap="md" align="center">
        <Avatar
          src={profileImg}
          radius="xl"
          size={120}
          style={{ border: '3px solid var(--mantine-color-violet-6)' }}
        />
        <Title order={1}>Marco Islas</Title>
        <Text size="sm" c="dimmed">
          Software Engineer
        </Text>
      </Stack>

      <Stack gap="md" style={{ maxWidth: 640 }}>
        {ABOUT_PARAGRAPHS.map((paragraph, i) => (
          <Box key={i} style={bubbleStyles}>
            <Text size="sm" style={{ lineHeight: 1.6 }}>
              {paragraph}
            </Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
