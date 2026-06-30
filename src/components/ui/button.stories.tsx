import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect, fn, userEvent } from "storybook/test";

import { Button } from "./button";

const meta = {
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A composable button component with size and variant options for primary actions, secondary actions, and link-style actions.",
      },
    },
  },
  tags: ["autodocs", "ai-generated"],
  argTypes: {
    children: {
      control: "text",
      description: "Text or content rendered inside the button.",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
      description: "Controls the visual style of the button.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "Controls the button size and spacing.",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Renders the button styles onto a child element via Radix Slot.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Fires when the button is clicked.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Submit",
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: "Submit" });
    await expect(button).toHaveAttribute("data-variant", "default");
    await expect(button).toHaveAttribute("data-size", "default");
  },
};

export const Outline: Story = {
  args: {
    children: "Cancel",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Link: Story = {
  args: {
    children: "Learn more",
    variant: "link",
  },
};

export const CssCheck: Story = {
  args: {
    children: "Tiny",
    size: "xs",
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: "Tiny" });
    await expect(getComputedStyle(button).fontSize).toBe("12px");
  },
};

export const CallsOnClick: Story = {
  args: {
    children: "Click me",
    onClick: fn(),
  },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole("button", { name: "Click me" });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
