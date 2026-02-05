import {
  AppShell,
  Stack,
  Text,
  Avatar,
  Button,
  Divider,
} from '@mantine/core'
import { IconInfoCircle, IconCode } from '@tabler/icons-react'

const SIDEBAR_WIDTH_EXPANDED = 260
const SIDEBAR_WIDTH_COLLAPSED = 80

const PAGES = {
  welcome: 'welcome',
  education: 'education',
  profile: 'profile',
  games: 'games',
  ai: 'ai',
  mobile: 'mobile',
  web: 'web',
}

export default function Sidebar({ opened, onToggle, currentPage, onNavigate }) {
  const width = opened ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED

  return (
    <AppShell.Navbar
      p="md"
      style={{
        width,
        minWidth: width,
        transition: 'width 200ms ease',
      }}
    >

      <Stack spacing="md">

        {/* Avatar */}
        <Avatar
          src="/profile.jpg"
          radius="xl"
          size={opened ? 72 : 44}
          styles={{
            root: {
              border: '2px solid #7950f2',
            },
          }}
          style={{
            cursor: 'pointer',
            alignSelf: 'center',
            transition: 'all 200ms ease',
          }}
          onClick={onToggle}
        />

        {/* Iconos visibles cuando la sidebar está colapsada (solo visual, sin hover) */}
        {!opened && (
          <Stack gap="xs" align="center">
            <IconInfoCircle size={22} stroke={1.5} style={{ color: 'var(--mantine-color-dimmed)' }} />
            <IconCode size={22} stroke={1.5} style={{ color: 'var(--mantine-color-dimmed)' }} />
          </Stack>
        )}

        {opened && (
          <>
            <Stack gap={2} align="center">
              <Text fw={600}>Marco Islas</Text>
              <Text size="xs" c="dimmed">
                Software Engineer
              </Text>
            </Stack>

            <Divider w="100%" />

            {/* About */}
            <Text size="sm" fw={500} c="dimmed" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconInfoCircle size={16} stroke={1.5} style={{ flexShrink: 0 }} />
              About
            </Text>

            <Button
              variant="subtle"
              color={currentPage === PAGES.profile ? 'violet' : 'gray'}
              justify="flex-start"
              fullWidth
              onClick={() => onNavigate(PAGES.profile)}
            >
              Profile
            </Button>

            <Button
              variant="subtle"
              color={currentPage === PAGES.education ? 'violet' : 'gray'}
              justify="flex-start"
              fullWidth
              onClick={() => onNavigate(PAGES.education)}
            >
              Education
            </Button>

            <Divider w="100%" />

            {/* Projects */}
            <Text size="sm" fw={500} c="dimmed" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <IconCode size={16} stroke={1.5} style={{ flexShrink: 0 }} />
              Projects
            </Text>

            <Button
              variant="subtle"
              color={currentPage === PAGES.games ? 'violet' : 'gray'}
              justify="flex-start"
              fullWidth
              onClick={() => onNavigate(PAGES.games)}
            >
              Video Games
            </Button>

            <Button
              variant="subtle"
              color={currentPage === PAGES.ai ? 'violet' : 'gray'}
              justify="flex-start"
              fullWidth
              onClick={() => onNavigate(PAGES.ai)}
            >
              AI & Computer Vision
            </Button>

            <Button
              variant="subtle"
              color={currentPage === PAGES.mobile ? 'violet' : 'gray'}
              justify="flex-start"
              fullWidth
              onClick={() => onNavigate(PAGES.mobile)}
            >
              Mobile Apps
            </Button>

            <Button
              variant="subtle"
              color={currentPage === PAGES.web ? 'violet' : 'gray'}
              justify="flex-start"
              fullWidth
              onClick={() => onNavigate(PAGES.web)}
            >
              Web Apps
            </Button>
          </>
        )}
      </Stack>
    </AppShell.Navbar>
  )
}
