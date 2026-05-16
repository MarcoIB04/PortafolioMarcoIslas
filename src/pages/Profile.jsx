import { Title, Text, Stack, Avatar, Box, Button, Group, CopyButton, Tooltip } from '@mantine/core'
import { IconMail, IconCheck, IconCopy } from '@tabler/icons-react'
import profileImg from '../assets/profile.jpg'

const EMAIL = 'marcoib0401@outlook.com'

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
  backgroundColor: '#E7F5FF',
  border: 'none',
  position: 'relative',
  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
}

export default function Profile() {
  return (
    <Stack gap="xl">
      {/* Header con botón de email */}
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
        
        {/* Email Copy Button */}
        <CopyButton value={EMAIL} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Email copied!' : 'Click to copy email'} withArrow position="bottom">
              <Button
                color={copied ? 'teal' : 'violet'}
                variant="light"
                size="sm"
                onClick={copy}
                leftSection={copied ? <IconCheck size={16} /> : <IconMail size={16} />}
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </Button>
            </Tooltip>
          )}
        </CopyButton>
      </Stack>

      {/* Messages styled like WhatsApp */}
      <Stack gap="md" style={{ maxWidth: 640 }}>
        {ABOUT_PARAGRAPHS.map((paragraph, i) => (
          <Stack key={i} gap="xs" align="flex-start">
            {/* Mostrar nombre y foto solo en el primer mensaje */}
            {i === 0 && (
              <Group gap="sm" align="flex-start">
                <Avatar src={profileImg} radius="xl" size={32} />
                <Text size="xs" fw={600} c="dimmed">
                  Marco Islas
                </Text>
              </Group>
            )}
            
            <Box style={bubbleStyles}>
              <Text size="sm" style={{ lineHeight: 1.6 }}>
                {paragraph}
              </Text>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
