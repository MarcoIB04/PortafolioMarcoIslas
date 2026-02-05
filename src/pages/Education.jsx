import { Title, Text, Stack, List, Box, Divider } from '@mantine/core'

export default function Education() {
  return (
    <Stack gap="xl">
      <Box>
        <Title order={1} mb="xs">
          Education
        </Title>
        <Text c="dimmed" size="sm">
          Formación académica y actividades
        </Text>
      </Box>

      {/* Universidad */}
      <Box>
        <Title order={2} size="h3" mb="xs">
          Instituto Tecnológico y de Estudios Superiores de Monterrey — ITESM
        </Title>
        <Text fw={500} mb={4}>
          Currently pursuing a B.S. in Computer Science and Technology – 5th semester
        </Text>
        <Text size="sm" c="dimmed">
          #1 university in Mexico and #4 in Latin America
        </Text>
        <Text size="sm" c="dimmed" mt={4}>
          GPA 3.76/4
        </Text>
      </Box>

      <Divider />

      {/* Leadership & Activities */}
      <Box>
        <Title order={2} size="h3" mb="md">
          Leadership & Activities
        </Title>
        <Text fw={500} mb="sm">
          Tecnológico de Monterrey — Engineering Student Community “KREI”
        </Text>
        <List size="sm" spacing="xs">
          <List.Item>
            Secured sponsorships for student events and proposed cost-saving strategies for
            efficient budget allocation.
          </List.Item>
          <List.Item>
            Co-organized academic and social events such as “Master Grill Challenge”,
            “KREIVersario”, and “ArKREI”.
          </List.Item>
          <List.Item>
            Participated as staff in national competitions such as the Downhill Challenge, a
            gravity-powered vehicle event with high school and university participation.
          </List.Item>
        </List>
      </Box>

      <Divider />

      {/* Certificates - mismo nivel que Education */}
      <Box>
        <Title order={2} size="h3" mb="md">
          Certificates
        </Title>
        <Text size="sm">
          VMEdu Scrum Fundamentals Certified (March 2025), PCEP Certified Entry-Level
          Python Programmer (October 2023)
        </Text>
      </Box>

      <Divider />

      {/* Skills */}
      <Box>
        <Title order={2} size="h3" mb="md">
          Skills
        </Title>
        <Stack gap="sm">
          <Box>
            <Text fw={600} size="sm" mb={4}>
              Technical
            </Text>
            <Text size="sm">
              <Text component="span" fw={500}>
                Languages:
              </Text>{' '}
              C++, C#, Kotlin, JavaScript, Python, SQL.
            </Text>
            <Text size="sm">
              <Text component="span" fw={500}>
                Tools/Frameworks:
              </Text>{' '}
              Unity, Node.js, Git, AWS, React.js
            </Text>
          </Box>
          <Box>
            <Text fw={600} size="sm" mb={4}>
              Soft Skills
            </Text>
            <Text size="sm">
              Leadership, Effective communication, Adaptability, Time management, Critical
              thinking, Team working
            </Text>
          </Box>
          <Box>
            <Text fw={600} size="sm" mb={4}>
              Language
            </Text>
            <Text size="sm">
              Spanish (Native), English B2
            </Text>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}
