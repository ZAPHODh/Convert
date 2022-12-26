import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Language } from '.';

describe('<Language />', () => {
  it('should render', () => {
    renderTheme(<Language />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
