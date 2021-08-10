import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('should display the header by default', () => {
    render(<Header />);
    const linkElement = screen.getByText(/MyUnity Mobile Sync Tool/i);
    expect(linkElement).toBeInTheDocument();
  });
});
