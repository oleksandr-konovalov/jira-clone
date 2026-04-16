import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { ProjectSummary } from "@domain/project";
import { ProjectsView } from "./projects.view";

const mockProjects: ProjectSummary[] = [
  {
    id: "jira-clone",
    name: "JIRA Clone",
    description: "A software project management tool built with Remix and React",
    image: "/images/projects/1.svg",
  },
  {
    id: "e-commerce-platform",
    name: "E-Commerce Platform",
    description: "Modern online shopping platform with advanced inventory management and payment integrations",
    image: "/images/projects/2.svg",
  },
  {
    id: "mobile-banking-app",
    name: "Mobile Banking App",
    description: "Secure mobile banking solution with biometric authentication",
    image: "/images/projects/3.svg",
  },
  {
    id: "healthcare-portal",
    name: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and medical records",
    image: "/images/projects/4.svg",
  },
  {
    id: "data-analytics-dashboard",
    name: "Data Analytics Dashboard",
    description: "Real-time business intelligence and reporting platform",
    image: "/images/projects/5.svg",
  },
];

const RemixStubDecorator = (Story: React.FC) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
      action: async () => ({ status: 200 }),
    },
    {
      path: "/new",
      element: <div>Add Project Form</div>,
    },
    {
      path: "/:projectId",
      element: <div>Project Details</div>,
    },
  ]);

  return <RemixStub initialEntries={["/"]} />;
};

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "surface",
    },
  },
  decorators: [RemixStubDecorator],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {
  args: {
    projectsSummary: mockProjects,
    search: "",
  },
};

export const WithSearchValue: Story = {
  args: {
    projectsSummary: mockProjects.filter(p => 
      p.name.toLowerCase().includes("jira") || 
      p.description?.toLowerCase().includes("software")
    ),
    search: "software",
  },
};

export const NoSearchResults: Story = {
  args: {
    projectsSummary: [],
    search: "nonexistent",
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: [mockProjects[0]],
    search: "",
  },
};
