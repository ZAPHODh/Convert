import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SetupNav } from '.';

describe('<SetupNav />', () => {
  it('should render', () => {
    renderTheme(<SetupNav />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
