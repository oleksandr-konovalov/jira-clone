import type { Meta, StoryObj } from "@storybook/react";
import {
  ProjectSummary,
  projectToProjectSummary,
  projectMock1,
  projectMock2,
} from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story: React.ComponentType) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

// Mock project summaries with diverse data
const mockProjectsSummary: ProjectSummary[] = [
  projectToProjectSummary(projectMock1),
  projectToProjectSummary(projectMock2),
  {
    id: "mobile-app",
    name: "Mobile App",
    description: "Cross-platform mobile application built with React Native",
    image: "/images/projects/3.svg",
    createdAt: new Date("2023-06-15").valueOf(),
  },
  {
    id: "api-gateway",
    name: "API Gateway",
    description: "Central API gateway for microservices architecture",
    image: "/images/projects/4.svg",
    createdAt: new Date("2023-03-22").valueOf(),
  },
  {
    id: "design-system",
    name: "Design System",
    description: "Shared component library and design tokens for all products",
    image: "/images/projects/5.svg",
    createdAt: new Date("2023-09-01").valueOf(),
  },
];

/**
 * Default state showing multiple projects with the search input
 * at the top right.
 */
export const Default: Story = {
  args: {
    projectsSummary: mockProjectsSummary,
    searchQuery: null,
  },
};

/**
 * Empty state when no projects match the search query.
 * The search bar shows at the top right with the empty state
 * message below.
 */
export const NoMatchesFound: Story = {
  args: {
    projectsSummary: [],
    searchQuery: "nonexistent project xyz",
  },
};

/**
 * State showing a single project (e.g., after filtering).
 */
export const SingleProject: Story = {
  args: {
    projectsSummary: [mockProjectsSummary[0]],
    searchQuery: null,
  },
};
