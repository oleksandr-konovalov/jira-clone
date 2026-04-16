import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectSearchData } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const mockProjectsWithIssues: ProjectSearchData[] = [
  {
    id: "jira-clone",
    name: "JIRA Clone",
    description: "A full-featured project management application",
    image: "/images/projects/1.svg",
    createdAt: new Date("2023-01-01 10:00").valueOf(),
    issues: [
      { id: "JIRA-101", name: "Implement user authentication" },
      { id: "JIRA-102", name: "Add project search feature" },
      { id: "JIRA-103", name: "Fix navigation styling" },
    ],
  },
  {
    id: "ecommerce-app",
    name: "E-Commerce Platform",
    description: "Online shopping platform with cart and checkout functionality",
    image: "/images/projects/2.svg",
    createdAt: new Date("2023-02-15 09:00").valueOf(),
    issues: [
      { id: "SHOP-201", name: "Build product catalog page" },
      { id: "SHOP-202", name: "Implement shopping cart" },
      { id: "SHOP-203", name: "Add payment integration" },
    ],
  },
  {
    id: "mobile-banking",
    name: "Mobile Banking App",
    description: "Secure banking application for mobile devices",
    image: "/images/projects/3.svg",
    createdAt: new Date("2023-03-10 14:00").valueOf(),
    issues: [
      { id: "BANK-301", name: "Create dashboard view" },
      { id: "BANK-302", name: "Add transaction history" },
      { id: "BANK-303", name: "Implement fund transfers" },
    ],
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description: "Real-time data visualization and reporting tool",
    image: "/images/projects/4.svg",
    createdAt: new Date("2023-04-05 11:00").valueOf(),
    issues: [
      { id: "DASH-401", name: "Design chart components" },
      { id: "DASH-402", name: "Connect to data sources" },
    ],
  },
];

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

export const Default: Story = {
  args: {
    projectsSummary: mockProjectsWithIssues,
  },
};

export const WithManyProjects: Story = {
  args: {
    projectsSummary: mockProjectsWithIssues,
  },
};

export const EmptyState: Story = {
  args: {
    projectsSummary: [],
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: [mockProjectsWithIssues[0]],
  },
};
