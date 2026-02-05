import { Title, Text, Stack } from '@mantine/core'
import ProjectCard from '../components/ProjectCard'

const TICKET_GO_DESCRIPTION = `Developed Ticket Go, a technical support ticket management system with both mobile and web platforms, designed to streamline issue reporting and tracking within organizations.

Key features include:

Creation, assignment, and tracking of technical support tickets.

A mobile application for on-the-go ticket management.

A web platform for administrators and support staff, providing centralized control and visibility. The web version offered the same full set of features as the mobile app, enabling complete ticket management from any device.

The system was built using Kotlin with Jetpack Compose for mobile, React.js for the web interface, and a backend powered by Node.js, MySQL, and AWS, ensuring scalability and efficient data handling. Agile practices were used to coordinate development and delivery across the team.`

export default function Mobile() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="xs">
          Mobile Apps
        </Title>
        <Text c="dimmed" size="sm">
          Mobile development projects
        </Text>
      </div>

      <ProjectCard
        title="Ticket Go (With Mac Computadoras)"
        chips={['Mobile App', 'Web App']}
        role="Scrum Master & Mobile & Web Developer"
        location="Cuernavaca, Morelos"
        dateRange="August 2025 – October 2025"
        description={TICKET_GO_DESCRIPTION}
        evidence={[]}
      />
    </Stack>
  )
}
