import type { Meta, StoryObj } from "@storybook/react";
import { ProjectSearchData } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "surface" },
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

// Mock data with projects that include issue stubs for search functionality
const mockProjectsWithIssues: ProjectSearchData[] = [
  {
    id: "jira-clone",
    name: "JIRA Clone",
    description: "A full-featured project management application",
    image: "/images/projects/1.svg",
    createdAt: new Date("2023-01-01").valueOf(),
    issues: [
      { id: "JC-101", name: "Implement user authentication" },
      { id: "JC-102", name: "Add drag and drop functionality" },
      { id: "JC-103", name: "Create project dashboard" },
    ],
  },
  {
    id: "design-system",
    name: "Design System",
    description: "Shared component library and design tokens for all products",
    image: "/images/projects/2.svg",
    createdAt: new Date("2023-02-15").valueOf(),
    issues: [
      { id: "DS-001", name: "Button component variants" },
      { id: "DS-002", name: "Modal dialog accessibility" },
      { id: "DS-003", name: "Color theme system" },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    description: "Cross-platform mobile application for iOS and Android",
    image: "/images/projects/3.svg",
    createdAt: new Date("2023-03-20").valueOf(),
    issues: [
      { id: "MA-201", name: "Push notification integration" },
      { id: "MA-202", name: "Offline mode support" },
      { id: "MA-203", name: "Biometric authentication" },
    ],
  },
  {
    id: "analytics-platform",
    name: "Analytics Platform",
    description: "Real-time data analytics and reporting dashboard",
    image: "/images/projects/4.svg",
    createdAt: new Date("2023-04-10").valueOf(),
    issues: [
      { id: "AP-050", name: "Chart rendering optimization" },
      { id: "AP-051", name: "Export to PDF feature" },
    ],
  },
];

export const Default: Story = {
  args: {
    projectsSummary: mockProjectsWithIssues,
  },
};

export const Empty: Story = {
  args: {
    projectsSummary: [],
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: [mockProjectsWithIssues[0]],
  },
};
