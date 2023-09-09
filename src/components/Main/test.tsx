import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    //renderiza o component
    const { container } = render(<Main />)
    //busca o elemento
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    //verifica a existencia
    expect(container.firstChild).toMatchSnapshot()
  })
})
