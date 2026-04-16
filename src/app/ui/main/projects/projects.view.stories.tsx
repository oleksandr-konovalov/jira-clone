import type { Meta, StoryObj } from "@storybook/react-vite";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { ProjectSummary, projectToProjectSummary, projectMock1, projectMock2 } from "@domain/project";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
          action: async () => ({ status: 200 }),
        },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

// Create diverse mock projects for realistic display
const mockProjects: ProjectSummary[] = [
  projectToProjectSummary(projectMock1),
  projectToProjectSummary(projectMock2),
  {
    id: "design-system",
    name: "Design System",
    description: "Component library and design tokens for the organization",
    image: "/images/projects/3.svg",
    createdAt: new Date("2023-03-15").valueOf(),
  },
  {
    id: "mobile-app",
    name: "Mobile Application",
    description: "React Native mobile app for iOS and Android platforms",
    image: "/images/projects/4.svg",
    createdAt: new Date("2023-02-20").valueOf(),
  },
  {
    id: "api-gateway",
    name: "API Gateway",
    description: "Centralized API gateway for microservices architecture",
    image: "/images/projects/5.svg",
    createdAt: new Date("2023-04-10").valueOf(),
  },
];

// Projects that match "test" search term
const testMatchProjects: ProjectSummary[] = [
  {
    id: "test-automation",
    name: "Test Automation Framework",
    description: "End-to-end testing infrastructure and CI/CD integration",
    image: "/images/projects/6.svg",
    createdAt: new Date("2023-05-01").valueOf(),
  },
  {
    id: "test-data",
    name: "Test Data Generator",
    description: "Tools for generating realistic test data for QA environments",
    image: "/images/projects/7.svg",
    createdAt: new Date("2023-05-15").valueOf(),
  },
];

/**
 * Default view showing all projects with empty search
 */
export const Default: Story = {
  args: {
    projectsSummary: mockProjects,
    search: "",
  },
};

/**
 * View with search term showing matching projects
 */
export const WithSearchResults: Story = {
  args: {
    projectsSummary: testMatchProjects,
    search: "test",
  },
};

/**
 * Empty state when no projects match the search
 */
export const NoResults: Story = {
  args: {
    projectsSummary: [],
    search: "nonexistent-project-xyz",
  },
};

/**
 * View with a single project
 */
export const SingleProject: Story = {
  args: {
    projectsSummary: [projectToProjectSummary(projectMock1)],
    search: "",
  },
};
