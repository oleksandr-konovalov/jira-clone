import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "neutral", "success", "danger", "warning", "info"],
    },
    variant: {
      control: "select",
      options: ["contained", "subtlest", "text"],
    },
    size: {
      control: "select",
      options: ["md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "contained",
    size: "md",
  },
};

export const Contained: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-font-subtle text-sm font-medium">Contained Variant</div>
      <div className="flex flex-wrap gap-3">
        <Button color="primary" variant="contained">Primary</Button>
        <Button color="neutral" variant="contained">Neutral</Button>
        <Button color="success" variant="contained">Success</Button>
        <Button color="danger" variant="contained">Danger</Button>
        <Button color="warning" variant="contained">Warning</Button>
        <Button color="info" variant="contained">Info</Button>
      </div>
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-font-subtle text-sm font-medium">Text Variant</div>
      <div className="flex flex-wrap gap-3">
        <Button color="primary" variant="text">Primary</Button>
        <Button color="neutral" variant="text">Neutral</Button>
        <Button color="success" variant="text">Success</Button>
        <Button color="danger" variant="text">Danger</Button>
        <Button color="warning" variant="text">Warning</Button>
        <Button color="info" variant="text">Info</Button>
      </div>
    </div>
  ),
};

export const Subtlest: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-font-subtle text-sm font-medium">Subtlest Variant</div>
      <div className="flex flex-wrap gap-3">
        <Button color="primary" variant="subtlest">Primary</Button>
        <Button color="neutral" variant="subtlest">Neutral</Button>
        <Button color="success" variant="subtlest">Success</Button>
        <Button color="danger" variant="subtlest">Danger</Button>
        <Button color="warning" variant="subtlest">Warning</Button>
        <Button color="info" variant="subtlest">Info</Button>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-xl font-semibold">Button Variants with Poppins Font</h2>
      
      <div className="flex flex-col gap-4">
        <div className="text-font-subtle text-sm font-medium">Contained</div>
        <div className="flex flex-wrap gap-3">
          <Button color="primary" variant="contained">Primary</Button>
          <Button color="neutral" variant="contained">Neutral</Button>
          <Button color="success" variant="contained">Success</Button>
          <Button color="danger" variant="contained">Danger</Button>
          <Button color="warning" variant="contained">Warning</Button>
          <Button color="info" variant="contained">Info</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-font-subtle text-sm font-medium">Text</div>
        <div className="flex flex-wrap gap-3">
          <Button color="primary" variant="text">Primary</Button>
          <Button color="neutral" variant="text">Neutral</Button>
          <Button color="success" variant="text">Success</Button>
          <Button color="danger" variant="text">Danger</Button>
          <Button color="warning" variant="text">Warning</Button>
          <Button color="info" variant="text">Info</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-font-subtle text-sm font-medium">Subtlest</div>
        <div className="flex flex-wrap gap-3">
          <Button color="primary" variant="subtlest">Primary</Button>
          <Button color="neutral" variant="subtlest">Neutral</Button>
          <Button color="success" variant="subtlest">Success</Button>
          <Button color="danger" variant="subtlest">Danger</Button>
          <Button color="warning" variant="subtlest">Warning</Button>
          <Button color="info" variant="subtlest">Info</Button>
        </div>
      </div>
    </div>
  ),
};

export const LargeSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-font-subtle text-sm font-medium">Large Size Buttons</div>
      <div className="flex flex-wrap gap-3">
        <Button color="primary" variant="contained" size="lg">Primary Large</Button>
        <Button color="neutral" variant="contained" size="lg">Neutral Large</Button>
        <Button color="success" variant="contained" size="lg">Success Large</Button>
      </div>
    </div>
  ),
};
