import { Title, Text, Stack } from '@mantine/core'
import ProjectCard from '../components/ProjectCard'
import tanukiSunset1 from '../assets/TanukiSunset/TanukiSunset1.gif'
import tanukiSunset2 from '../assets/TanukiSunset/TanukiSunset2.gif'
import tanukiSunset3 from '../assets/TanukiSunset/TanukiSunset3.gif'

const TANUKI_EVIDENCE = [
  {
    src: tanukiSunset1,
    alt: 'Player Profiling Agent',
    description:
      "Agent used to detect the player's gaming style. The agent obtains the player's information and returns a percentage for each gaming style. For training, the agreement between the obtained percentages and the real percentages calculated from data obtained in multiple runs of the agent is computed.",
  },
  {
    src: tanukiSunset2,
    alt: 'Environment Adaptation Agent',
    description:
      "Agent that obtains the percentages from the first style-detection agent and returns the obstacle to be placed on the track. The agent was rewarded according to the chosen obstacle multiplied by the percentage of style corresponding to the obstacle type.",
  },
  {
    src: tanukiSunset3,
    alt: 'Simulated player agent demo',
    description:
      'Demonstration of one of the trained tanukis to simulate player behavior.',
  },
]

export default function AI() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="xs">
          AI & Computer Vision
        </Title>
        <Text c="dimmed" size="sm">
          ML, agents, and computer vision projects
        </Text>
      </div>

      <ProjectCard
        title="ML Agent for Tanuki Sunset (With Rewind Japan)"
        chips={['Video Games', 'ML Agents']}
        role="Scrum Master, ML developer & Game developer"
        location="Cuernavaca, Morelos"
        dateRange="November 2025 – Present"
        description={`Developed a multi-agent system for Tanuki Sunset using Unity, ML-Agents (PyTorch), and C#. The system dynamically adapts the game experience based on the player's gaming style.

The solution consists of two main ML agents:

Player Profiling Agent: Analyzes the player's behavior using metrics such as collected bits, average speed, and current velocity to infer their gaming style.

Environment Adaptation Agent: Adjusts the game difficulty by deciding which obstacles to spawn on the road according to the inferred player profile.

Additionally, trained three simulated player agents with distinct playstyles to generate diverse behaviors and improve the training of the adaptive system.`}
        evidence={TANUKI_EVIDENCE}
      />

      <ProjectCard
        title="Computer Vision Hand Gesture Control System"
        chips={['Computer Vision']}
        role="Computer Vision Developer"
        location="Cuernavaca, Morelos"
        dateRange="February 2026 – Present"
        description={`Developed a real-time computer vision system for hand detection and gesture-based computer interaction using OpenCV and MediaPipe. The system enables hands-free control of the computer through intuitive hand gestures.

Key features of the system include:

Mouse cursor control based on hand position and movement.

Gesture-based click actions (left/right click) using finger configurations.

Media control commands, such as play, pause, and navigation, triggered by predefined gestures.

The system processes live camera input with OpenCV and MediaPipe to track hand landmarks with low latency and maps recognized gestures to operating system actions, providing a natural and responsive human–computer interaction experience.`}
        evidence={[]}
      />
    </Stack>
  )
}
