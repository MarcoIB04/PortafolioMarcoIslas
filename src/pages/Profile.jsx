import { Text, Stack, Avatar, Box, Group, ActionIcon, CopyButton, Tooltip } from '@mantine/core'
import { IconMail, IconCheck } from '@tabler/icons-react'
import profileImg from '../assets/profile.jpg'

const EMAIL = 'marcoib0401@outlook.com'

const MESSAGES = [
  'I am a Software Engineer with a strong passion for video games and game development, where creativity and technical problem-solving naturally intersect. I enjoy exploring how ideas become interactive experiences, from designing gameplay systems to building the underlying software that supports them.',
  'Beyond game development, I am deeply interested in artificial intelligence, software architecture, and project management. I like to experiment and innovate across different areas of software, working on diverse projects that challenge me to learn new tools, approaches, and ways of thinking. This curiosity drives me to continuously improve both my technical skills and my ability to design well-structured, scalable systems.',
  'I have experience developing games, AI-driven solutions, and web and mobile applications, often within agile environments where collaboration and clear communication are essential. I\'m comfortable taking on roles that combine hands-on development with coordination and leadership, ensuring that ideas move efficiently from concept to execution.',
  "At my core, I'm motivated by building software that blends technical rigor, creativity, and thoughtful design, and by contributing to projects where innovation, structure, and teamwork come together to create impactful digital solutions.",
]

export default function Profile() {
  return (
    <Box style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* WhatsApp-style top bar */}
        <Group
          justify="space-between"
          align="center"
          px="md"
          py="sm"
          style={{ backgroundColor: 'var(--mantine-color-dark-6)' }}
        >
          <Group gap="sm">
            <Avatar
              src={profileImg}
              radius="xl"
              size={42}
              style={{ border: '2px solid var(--mantine-color-violet-6)' }}
            />
            <Stack gap={0}>
              <Text fw={600} size="sm" c="white">Marco Islas</Text>
              <Text size="xs" c="dimmed">Software Engineer</Text>
            </Stack>
          </Group>

          <CopyButton value={EMAIL} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? 'Email copied!' : 'Copy email'} withArrow position="left">
                <ActionIcon
                  variant="subtle"
                  color={copied ? 'teal' : 'gray'}
                  size="lg"
                  onClick={copy}
                >
                  {copied ? <IconCheck size={20} /> : <IconMail size={20} />}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>

        {/* Chat messages */}
        <Box px="md" py="lg" style={{ backgroundColor: 'var(--mantine-color-dark-8)', flex: 1 }}>
          <Stack gap="xs">
            {MESSAGES.map((text, i) => (
              <Group key={i} gap="xs" align="flex-end" wrap="nowrap">
                {i === MESSAGES.length - 1 ? (
                  <Avatar src={profileImg} radius="xl" size={28} style={{ flexShrink: 0 }} />
                ) : (
                  <Box style={{ width: 28, flexShrink: 0 }} />
                )}

                <Box
                  style={{
                    maxWidth: '82%',
                    backgroundColor: 'var(--mantine-color-dark-6)',
                    borderRadius: i === MESSAGES.length - 1 ? '18px 18px 18px 0' : '18px',
                    padding: '8px 12px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  {i === 0 && (
                    <Text size="xs" fw={600} c="blue.4" mb={4}>Marco Islas</Text>
                  )}
                  <Text size="sm" c="white" style={{ lineHeight: 1.6 }}>
                    {text}
                  </Text>
                </Box>
              </Group>
            ))}
          </Stack>
        </Box>

      </Box>
    </Box>
  )
}
