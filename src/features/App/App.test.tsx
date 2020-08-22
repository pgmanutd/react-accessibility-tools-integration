import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import App from './App';

expect.extend(toHaveNoViolations);

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
});

it('popup should not fail an aXe audit', async () => {
  const { container } = render(<App />);

  expect(await axe(container)).toHaveNoViolations();
});
