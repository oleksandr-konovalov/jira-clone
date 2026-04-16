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

// Mock data with projects that have populated issues for search testing
const mockProjectsWithIssues: ProjectSearchData[] = [
  {
    id: "jira-clone",
    name: "JIRA Clone",
    description: "A project management application inspired by Jira",
    image: "/images/projects/1.svg",
    issues: [
      { id: "JC-101", name: "Setup project structure" },
      { id: "JC-102", name: "Implement authentication flow" },
      { id: "JC-103", name: "Create dashboard layout" },
    ],
  },
  {
    id: "ecommerce-app",
    name: "E-Commerce Platform",
    description: "Full-stack online shopping platform with payment integration",
    image: "/images/projects/2.svg",
    issues: [
      { id: "EC-201", name: "Shopping cart functionality" },
      { id: "EC-202", name: "Product catalog page" },
      { id: "EC-203", name: "Checkout process" },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile Banking App",
    description: "Secure banking application for iOS and Android devices",
    image: "/images/projects/3.svg",
    issues: [
      { id: "MB-301", name: "Biometric authentication" },
      { id: "MB-302", name: "Fund transfer module" },
      { id: "MB-303", name: "Transaction history view" },
    ],
  },
  {
    id: "analytics-dashboard",
    name: "Analytics Dashboard",
    description: "Real-time data visualization and reporting tool",
    image: "/images/projects/4.svg",
    issues: [
      { id: "AD-401", name: "Chart components" },
      { id: "AD-402", name: "Data export feature" },
    ],
  },
  {
    id: "crm-system",
    name: "CRM System",
    description: "Customer relationship management with pipeline tracking",
    image: "/images/projects/5.svg",
    issues: [
      { id: "CRM-501", name: "Contact management" },
      { id: "CRM-502", name: "Lead scoring algorithm" },
      { id: "CRM-503", name: "Email integration" },
    ],
  },
];

export const Default: Story = {
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

export const ManyProjects: Story = {
  args: {
    projectsSummary: [
      ...mockProjectsWithIssues,
      {
        id: "blog-platform",
        name: "Blog Platform",
        description: "Content publishing system with SEO optimization",
        image: "/images/projects/6.svg",
        issues: [
          { id: "BP-601", name: "Rich text editor" },
          { id: "BP-602", name: "Comment system" },
        ],
      },
      {
        id: "chat-app",
        name: "Real-time Chat App",
        description: "Instant messaging application with video calling",
        image: "/images/projects/7.svg",
        issues: [
          { id: "CA-701", name: "WebSocket integration" },
          { id: "CA-702", name: "Media sharing" },
        ],
      },
    ],
  },
};

