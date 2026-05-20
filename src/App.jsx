import { useState } from 'react'
import { AppShell, Text, Title } from '@mantine/core'
import Sidebar from './components/Sidebar'
import Education from './pages/Education'
import AI from './pages/AI'
import Games from './pages/Games'
import Web from './pages/Web'
import Mobile from './pages/Mobile'
import Profile from './pages/Profile'

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

export default function App() {
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [currentPage, setCurrentPage] = useState(PAGES.profile)
  const navbarWidth = sidebarOpened ? SIDEBAR_WIDTH_EXPANDED : SIDEBAR_WIDTH_COLLAPSED

  function renderPage() {
    switch (currentPage) {
      case PAGES.education:
        return <Education />
      case PAGES.profile:
        return <Profile />
      case PAGES.ai:
        return <AI />
      case PAGES.games:
        return <Games />
      case PAGES.web:
        return <Web />
      case PAGES.mobile:
        return <Mobile />
      case PAGES.welcome:
      default:
        return (
          <>
            <Title order={1}>Welcome 👋</Title>
            <Text c="dimmed" mt="sm">
              Select a section from the sidebar
            </Text>
          </>
        )
    }
  }

  return (
    <AppShell
      navbar={{
        width: navbarWidth,
        breakpoint: 'sm',
      }}
    >
      <Sidebar
        opened={sidebarOpened}
        onToggle={() => setSidebarOpened((o) => !o)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <AppShell.Main
        p={currentPage === PAGES.profile ? 0 : 'xl'}
        style={{
          minHeight: '100vh',
          marginLeft: navbarWidth,
          transition: 'margin-left 200ms ease',
        }}
      >
        {renderPage()}
      </AppShell.Main>
    </AppShell>
  )
}
