import type { Meta, StoryObj } from "@storybook/react";
import * as Dialog from "./dialog";
import { Button } from "../button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>
              This is the description of the dialog. Here you can add more
              information about the dialog content.
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-2">
              <Dialog.Close asChild>
                <Button color="neutral">Cancel</Button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Button color="primary">Confirm</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const FontWeightShowcase: Story = {
  render: () => (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Poppins Font Weight Showcase</Dialog.Title>
            <Dialog.Description>
              Demonstrating all Poppins font weights used in the design system.
            </Dialog.Description>
            <div className="mt-6 space-y-4">
              <div className="font-primary-light text-lg">
                <span className="text-sm text-font-subtle">Light (300):</span>{" "}
                <br />
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="font-primary text-lg">
                <span className="text-sm text-font-subtle">Medium (500):</span>{" "}
                <br />
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="font-primary-bold text-lg">
                <span className="text-sm text-font-subtle">Bold (700):</span>{" "}
                <br />
                The quick brown fox jumps over the lazy dog
              </div>
              <div className="font-primary-black text-lg">
                <span className="text-sm text-font-subtle">Black (900):</span>{" "}
                <br />
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Dialog.Close asChild>
                <Button color="neutral">Close</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const WithTrigger: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Triggered Dialog</Dialog.Title>
            <Dialog.Description>
              This dialog was opened by clicking the trigger button.
            </Dialog.Description>
            <div className="mt-4 flex justify-end gap-2">
              <Dialog.Close asChild>
                <Button color="neutral">Cancel</Button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Button color="primary">Save</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
