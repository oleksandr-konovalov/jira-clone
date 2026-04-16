import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectSearchData } from "@domain/project";
import { withRemixStub, withMainContext } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

// Mock data with ProjectSearchData structure including issues array
const mockProjectsSummary: ProjectSearchData[] = [
  {
    id: "jira-clone",
    name: "JIRA Clone",
    description: "A fully functional Jira clone for project management",
    image: "/images/projects/1.svg",
    createdAt: new Date("2023-01-01").valueOf(),
    issues: [
      { id: "JIRA-101", name: "Implement user authentication" },
      { id: "JIRA-102", name: "Add drag and drop for issues" },
      { id: "JIRA-103", name: "Create project settings page" },
    ],
  },
  {
    id: "ecommerce-platform",
    name: "E-Commerce Platform",
    description: "Modern online shopping platform with payment integration",
    image: "/images/projects/2.svg",
    createdAt: new Date("2023-02-15").valueOf(),
    issues: [
      { id: "SHOP-201", name: "Shopping cart functionality" },
      { id: "SHOP-202", name: "Product search and filtering" },
      { id: "SHOP-203", name: "Order tracking system" },
    ],
  },
  {
    id: "mobile-banking",
    name: "Mobile Banking App",
    description: "Secure mobile banking solution with real-time transactions",
    image: "/images/projects/3.svg",
    createdAt: new Date("2023-03-20").valueOf(),
    issues: [
      { id: "BANK-301", name: "Account balance dashboard" },
      { id: "BANK-302", name: "Fund transfer module" },
      { id: "BANK-303", name: "Transaction history view" },
    ],
  },
  {
    id: "health-tracker",
    name: "Health & Fitness Tracker",
    description: "Comprehensive health monitoring and workout tracking application",
    image: "/images/projects/4.svg",
    createdAt: new Date("2023-04-10").valueOf(),
    issues: [
      { id: "FIT-401", name: "Daily step counter widget" },
      { id: "FIT-402", name: "Workout plan generator" },
      { id: "FIT-403", name: "Nutrition logging feature" },
    ],
  },
  {
    id: "social-network",
    name: "Social Network Platform",
    description: "Connect with friends and share your experiences",
    image: "/images/projects/5.svg",
    createdAt: new Date("2023-05-05").valueOf(),
    issues: [
      { id: "SOC-501", name: "User profile customization" },
      { id: "SOC-502", name: "Real-time messaging system" },
      { id: "SOC-503", name: "News feed algorithm" },
    ],
  },
];

export const Default: Story = {
  args: {
    projectsSummary: mockProjectsSummary,
  },
};

export const EmptyState: Story = {
  args: {
    projectsSummary: [],
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: [mockProjectsSummary[0]],
  },
};

export const WithSearchDemo: Story = {
  args: {
    projectsSummary: mockProjectsSummary,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the search functionality - type to filter projects by name, description, or task ID/name.",
      },
    },
  },
};
