import { screen } from '@testing-library/react';
import { Pulse } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Pulse />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Pulse />);
    expect(container).toMatchSnapshot();
  });
});
