import { Title, Text, Stack } from '@mantine/core'
import ProjectCard from '../components/ProjectCard'
import natureVenture1 from '../assets/NatureVenture/NatureVenture1.gif'
import natureVenture5 from '../assets/NatureVenture/NatureVenture5.jpeg'
import natureVenture6 from '../assets/NatureVenture/NatureVenture6.jpeg'

const TICKET_GO_DESCRIPTION = `Developed Ticket Go, a technical support ticket management system with both mobile and web platforms, designed to streamline issue reporting and tracking within organizations.

Key features include:

Creation, assignment, and tracking of technical support tickets.

A mobile application for on-the-go ticket management.

A web platform for administrators and support staff, providing centralized control and visibility. The web version offered the same full set of features as the mobile app, enabling complete ticket management from any device.

The system was built using Kotlin with Jetpack Compose for mobile, React.js for the web interface, and a backend powered by Node.js, MySQL, and AWS, ensuring scalability and efficient data handling. Agile practices were used to coordinate development and delivery across the team.`

const NATURE_VENTURE_WEB_DESCRIPTION = `Designed and coordinated the web-based analytics dashboard for Nature Venture, an educational farming simulation game for children aged 8–12 developed with Aulify.

The dashboard provides administrators and educators with centralized visibility into player progress and learning outcomes. Key web features include:

Login and authentication for staff access.

A dashboard displaying player rankings and individual achievement tracking.

Real-time analytics on player behavior and in-game performance, supporting data-driven insights.

The web interface was built with React.js, HTML, and CSS, with a backend on Node.js, MySQL, and AWS. The dashboard complements the Unity WebGL game by enabling monitoring and assessment of learning objectives.`

const NATURE_VENTURE_WEB_EVIDENCE = [
  {
    src: natureVenture5,
    alt: 'Dashboard login',
    description: 'Login screen of the Nature Venture web dashboard.',
  },
  {
    src: natureVenture6,
    alt: 'Dashboard overview',
    description: 'Dashboard showing player ranking and achievements for each player.',
  },
  {
    src: natureVenture1,
    alt: 'Nature Venture game',
    description: 'Gameplay overview: educational farming simulation the dashboard supports.',
  },
]

export default function Web() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="xs">
          Web Apps
        </Title>
        <Text c="dimmed" size="sm">
          Web development projects
        </Text>
      </div>

      <ProjectCard
        title="Ticket Go (With Mac Computadoras)"
        chips={['Web App', 'Mobile App']}
        role="Scrum Master & Mobile & Web Developer"
        location="Cuernavaca, Morelos"
        dateRange="August 2025 – October 2025"
        description={TICKET_GO_DESCRIPTION}
        evidence={[]}
      />

      <ProjectCard
        title="Nature Venture – Analytics Dashboard (With Aulify)"
        chips={['Web App', 'Video Games']}
        role="Scrum Master & Game Developer"
        location="Cuernavaca, Morelos"
        dateRange="February 2025 – April 2025"
        description={NATURE_VENTURE_WEB_DESCRIPTION}
        evidence={NATURE_VENTURE_WEB_EVIDENCE}
      />
    </Stack>
  )
}
