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
  decorators: [(Story: React.ComponentType) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

// Create diverse mock projects for testing search functionality
const mockProjectsSearchData: ProjectSearchData[] = [
  {
    id: "jira-clone",
    name: "JIRA Clone",
    description: "A project management tool built with modern web technologies",
    image: "/images/projects/1.svg",
    createdAt: new Date("2023-01-15").valueOf(),
    issues: [
      { id: "JC-101", name: "Implement drag and drop for issues" },
      { id: "JC-102", name: "Add user authentication flow" },
      { id: "JC-103", name: "Create dashboard analytics" },
    ],
  },
  {
    id: "e-commerce-platform",
    name: "E-Commerce Platform",
    description:
      "Full-featured online shopping platform with payment integration",
    image: "/images/projects/2.svg",
    createdAt: new Date("2023-03-20").valueOf(),
    issues: [
      { id: "EC-201", name: "Shopping cart functionality" },
      { id: "EC-202", name: "Payment gateway integration" },
      { id: "EC-203", name: "Product search and filtering" },
    ],
  },
  {
    id: "mobile-app-redesign",
    name: "Mobile App Redesign",
    description: "Complete UI/UX overhaul of the mobile application",
    image: "/images/projects/3.svg",
    createdAt: new Date("2023-05-10").valueOf(),
    issues: [
      { id: "MAR-301", name: "Design new navigation system" },
      { id: "MAR-302", name: "Implement dark mode theme" },
      { id: "MAR-303", name: "Optimize performance for low-end devices" },
    ],
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description:
      "Real-time data visualization and reporting tool for business metrics",
    image: "/images/projects/4.svg",
    createdAt: new Date("2023-07-01").valueOf(),
    issues: [
      { id: "AD-401", name: "Create chart components library" },
      { id: "AD-402", name: "Implement data export feature" },
      { id: "AD-403", name: "Build custom report generator" },
    ],
  },
];

export const Default: Story = {
  args: {
    projectsSearchData: mockProjectsSearchData,
  },
};

export const WithManyProjects: Story = {
  args: {
    projectsSearchData: [
      ...mockProjectsSearchData,
      {
        id: "api-gateway",
        name: "API Gateway",
        description: "Centralized API management and routing service",
        image: "/images/projects/5.svg",
        createdAt: new Date("2023-08-15").valueOf(),
        issues: [
          { id: "AG-501", name: "Rate limiting implementation" },
          { id: "AG-502", name: "Authentication middleware" },
        ],
      },
      {
        id: "design-system",
        name: "Design System",
        description:
          "Shared component library and design tokens for all products",
        image: "/images/projects/6.svg",
        createdAt: new Date("2023-09-01").valueOf(),
        issues: [
          { id: "DS-601", name: "Button component variants" },
          { id: "DS-602", name: "Color palette documentation" },
        ],
      },
    ],
  },
};

export const EmptyProjects: Story = {
  args: {
    projectsSearchData: [],
  },
};