import type { Meta, StoryObj } from "@storybook/react";
import { ProjectSearchData, projectsMock } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

// Create ProjectSearchData mock with issues for search demonstration
const mockProjectsWithIssues: ProjectSearchData[] = [
  {
    id: projectsMock[0].id,
    name: projectsMock[0].name,
    description: projectsMock[0].description,
    image: projectsMock[0].image,
    createdAt: projectsMock[0].createdAt,
    issues: [
      { id: "JC-001", name: "Implement user authentication" },
      { id: "JC-002", name: "Create dashboard layout" },
      { id: "JC-003", name: "Add project settings page" },
    ],
  },
  {
    id: projectsMock[1].id,
    name: projectsMock[1].name,
    description: projectsMock[1].description,
    image: projectsMock[1].image,
    createdAt: projectsMock[1].createdAt,
    issues: [
      { id: "SP-001", name: "Setup database schema" },
      { id: "SP-002", name: "API integration" },
    ],
  },
  {
    id: "project-3",
    name: "Marketing Dashboard",
    description: "Analytics and reporting dashboard for marketing campaigns",
    image: "/projects/3.svg",
    createdAt: new Date("2023-03-15 09:00").valueOf(),
    issues: [
      { id: "MD-001", name: "Chart visualizations" },
      { id: "MD-002", name: "Export to PDF feature" },
      { id: "MD-003", name: "Campaign tracking" },
    ],
  },
];

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

export const Default: Story = {
  args: {
    projectsSummary: mockProjectsWithIssues,
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: [mockProjectsWithIssues[0]],
  },
};

export const EmptyProjects: Story = {
  args: {
    projectsSummary: [],
  },
};
