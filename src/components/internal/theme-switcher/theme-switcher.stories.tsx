import { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './theme-switcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Internal/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          **ThemeSwitcher** is a button component that toggles between dark and light themes. 
          It utilizes the \`useTheme\` hook to switch themes. The button displays either a moon or sun icon based on the current theme.

          ### Usage Example:
          \`\`\`tsx
          import { ThemeSwitcher } from './ThemeSwitcher';

          const App = () => {
            return <ThemeSwitcher />;
          };
          \`\`\`

          ### Accessibility:
          The button provides theme switching functionality and is fully accessible with keyboard navigation.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  render: () => <ThemeSwitcher />,
};
