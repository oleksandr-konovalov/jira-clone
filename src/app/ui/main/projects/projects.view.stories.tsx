import type { Meta, StoryObj } from "@storybook/react";
import { ProjectSearchData } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

// Mock ProjectSearchData with realistic project data and issue stubs
const mockProjects: ProjectSearchData[] = [
  {
    id: "proj-1",
    name: "JIRA Clone",
    description: "A full-featured project management application with drag-and-drop kanban boards",
    image: "/projects/1.svg",
    createdAt: new Date("2023-01-15").valueOf(),
    issues: [
      { id: "JIRA-123", name: "Fix login bug" },
      { id: "JIRA-456", name: "Add dashboard" },
      { id: "JIRA-789", name: "Implement search" },
    ],
  },
  {
    id: "proj-2",
    name: "E-Commerce Platform",
    description: "Modern online shopping platform with payment integration and inventory management",
    image: "/projects/2.svg",
    createdAt: new Date("2023-02-20").valueOf(),
    issues: [
      { id: "SHOP-101", name: "Cart functionality" },
      { id: "SHOP-102", name: "Product filtering" },
    ],
  },
  {
    id: "proj-3",
    name: "Mobile Banking App",
    description: "Secure mobile banking solution with biometric authentication",
    image: "/projects/3.svg",
    createdAt: new Date("2023-03-10").valueOf(),
    issues: [
      { id: "BANK-001", name: "Transaction history" },
      { id: "BANK-002", name: "Account overview" },
      { id: "BANK-003", name: "Fund transfer feature" },
      { id: "BANK-004", name: "Bill payments" },
    ],
  },
  {
    id: "proj-4",
    name: "Analytics Dashboard",
    description: "Real-time data visualization and business intelligence tool",
    image: "/projects/4.svg",
    createdAt: new Date("2023-04-05").valueOf(),
    issues: [
      { id: "DASH-201", name: "Chart components" },
      { id: "DASH-202", name: "Export to PDF" },
    ],
  },
];

export const Default: Story = {
  args: {
    projectsSummary: mockProjects,
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: [mockProjects[0]],
  },
};

export const EmptyProjects: Story = {
  args: {
    projectsSummary: [],
  },
};
