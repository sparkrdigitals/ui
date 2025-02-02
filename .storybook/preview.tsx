import type { Preview } from '@storybook/react';
import { ReactNode } from 'react';
import React from 'react';

import { ThemeProvider } from '../src/contexts/theme-contexts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: () => ReactNode) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
