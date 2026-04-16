import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// All available button colors for comprehensive variant testing
const BUTTON_COLORS = [
  "primary",
  "neutral",
  "success",
  "danger",
  "warning",
  "info",
] as const;

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
      <div className="text-sm font-medium text-font-subtle">
        Contained Variant
      </div>
      <div className="flex flex-wrap gap-3">
        {BUTTON_COLORS.map((color) => (
          <Button key={color} color={color} variant="contained">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  ),
};

export const Text: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-medium text-font-subtle">Text Variant</div>
      <div className="flex flex-wrap gap-3">
        {BUTTON_COLORS.map((color) => (
          <Button key={color} color={color} variant="text">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  ),
};

export const Subtlest: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-medium text-font-subtle">
        Subtlest Variant
      </div>
      <div className="flex flex-wrap gap-3">
        {BUTTON_COLORS.map((color) => (
          <Button key={color} color={color} variant="subtlest">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  ),
};

// Comprehensive showcase of all button variants to demonstrate the Poppins font update
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <h2 className="text-xl font-semibold">
        Button Variants with Poppins Font
      </h2>

      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium text-font-subtle">Contained</div>
        <div className="flex flex-wrap gap-3">
          {BUTTON_COLORS.map((color) => (
            <Button key={color} color={color} variant="contained">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium text-font-subtle">Text</div>
        <div className="flex flex-wrap gap-3">
          {BUTTON_COLORS.map((color) => (
            <Button key={color} color={color} variant="text">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-sm font-medium text-font-subtle">Subtlest</div>
        <div className="flex flex-wrap gap-3">
          {BUTTON_COLORS.map((color) => (
            <Button key={color} color={color} variant="subtlest">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const LargeSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="text-sm font-medium text-font-subtle">
        Large Size Buttons
      </div>
      <div className="flex flex-wrap gap-3">
        <Button color="primary" variant="contained" size="lg">
          Primary Large
        </Button>
        <Button color="neutral" variant="contained" size="lg">
          Neutral Large
        </Button>
        <Button color="success" variant="contained" size="lg">
          Success Large
        </Button>
      </div>
    </div>
  ),
};
