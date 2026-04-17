import type { Meta, StoryObj } from "@storybook/react-vite";
import * as Dialog from "./dialog";
import { Button } from "../button";

const meta: Meta = {
  title: "Components/Dialog",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj;

/**
 * Demonstrates all Poppins font weights in the Dialog:
 * - Title: font-primary-black (Poppins 900)
 * - Description: font-primary-light (Poppins 300)
 * - Button text: default font-primary (Poppins 500)
 */
export const FontWeightShowcase: Story = {
  render: () => (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description className="font-primary-light text-lg text-font-subtle">
              This description text uses Poppins Light (300 weight) to provide a
              visual contrast with the bold title above. The lighter weight
              creates a clear hierarchy between heading and body text.
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button color="neutral" variant="subtlest">
                  Cancel
                </Button>
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

export const Default: Story = {
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description className="font-primary-light text-font-subtle">
              This is the description of the dialog. Here you can add more
              information about the dialog content.
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button color="neutral" variant="subtlest">
                  Cancel
                </Button>
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
