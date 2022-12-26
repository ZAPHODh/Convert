import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Convert, ConvertProps } from '.';

const props: ConvertProps = {};

describe('<Convert />', () => {
  it('should render', () => {
    renderTheme(<Convert {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
