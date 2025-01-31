import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button />);
  });
});
