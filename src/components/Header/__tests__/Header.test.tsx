import { render, screen } from '@testing-library/react'
import Header from '..'
import { Provider } from 'react-redux'
import { store } from '../../../store'

describe('test para o componente header', () => {
  test('execultando o test', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
