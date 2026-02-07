import { Title, Text, Stack } from '@mantine/core'
import ProjectCard from '../components/ProjectCard'
import tanukiSunset1 from '../assets/TanukiSunset/TanukiSunset1.gif'
import tanukiSunset2 from '../assets/TanukiSunset/TanukiSunset2.gif'
import tanukiSunset3 from '../assets/TanukiSunset/TanukiSunset3.gif'
import natureVenture1 from '../assets/NatureVenture/NatureVenture1.gif'
import natureVenture2 from '../assets/NatureVenture/NatureVenture2.gif'
import natureVenture3 from '../assets/NatureVenture/NatureVenture3.gif'
import natureVenture4 from '../assets/NatureVenture/NatureVenture4.gif'
import natureVenture6 from '../assets/NatureVenture/NatureVenture6.jpeg'

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

const NATURE_VENTURE_EVIDENCE = [
  {
    src: natureVenture1,
    alt: 'Initial dialogues and crops',
    description:
      'Demonstration of the initial dialogues and use of crops as well as their upgrades.',
  },
  {
    src: natureVenture2,
    alt: 'Farms and coins',
    description:
      'Demonstration of farms and earning coins through animals.',
  },
  {
    src: natureVenture3,
    alt: 'Zone unlocking',
    description:
      'Demonstration of unlocking zones through house upgrades.',
  },
  {
    src: natureVenture4,
    alt: 'New structures',
    description:
      'Demonstration of building new structures in unlocked zones.',
  },
  {
    src: natureVenture6,
    alt: 'Analytics dashboard',
    description:
      'Web dashboard showing player ranking and achievements.',
  },
]

export default function Games() {
  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="xs">
          Video Games
        </Title>
        <Text c="dimmed" size="sm">
          Game development projects
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
        title="Nature Venture (With Aulify)"
        chips={['Video Games', 'Web App']}
        role="Scrum Master & Game Developer"
        location="Cuernavaca, Morelos"
        dateRange="February 2025 – April 2025"
        description={`Developed an educational farming simulation game for children aged 8–12 in collaboration with Aulify. The game teaches basic concepts of resource management, planning, and progression through interactive gameplay.

Players build and expand their own farm by:

Earning in-game currency through planting and harvesting crops and taking care of animals.

Upgrading farm structures to unlock new types of plants and animals.

Improving their house to access new areas, zones, and additional land plots.

The game was developed using Unity WebGL and C#, combining engaging mechanics with educational goals. Agile methodologies were applied throughout development to ensure effective collaboration and timely delivery.`}
        evidence={NATURE_VENTURE_EVIDENCE}
      />
    </Stack>
  )
}
