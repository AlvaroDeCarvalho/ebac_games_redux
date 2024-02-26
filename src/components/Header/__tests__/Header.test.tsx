import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../utils/tests'

describe('test para o componente header', () => {
  test('execultando o test', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('deve renderizar com 2 itens no carrinho', () => {
    const { debug } = renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['Windows', 'PS4', 'XBOX 5'],
              preco: 240.9,
              precoAntigo: 399.9,
              titulo: 'Dark Souls 4'
            }
          ]
        }
      }
    })
    debug()
    expect(screen.getByTestId('qnt-carrinho').innerHTML).toContain('2 itens')
  })
})
