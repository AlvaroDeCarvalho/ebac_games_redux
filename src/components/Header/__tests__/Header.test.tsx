import { screen } from '@testing-library/react'
import Header from '..'
import { renderWithProvider } from '../../../utils/tests'

describe('test para o componente header', () => {
  test('execultando o test', () => {
    renderWithProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('Retornando dos elementos do array', () => {
    const { debug } = renderWithProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              categoria: 'RPG',
              id: 1,
              imagem: '',
              plataformas: ['pc'],
              preco: 100,
              precoAntigo: 120,
              titulo: 'GTA5'
            },
            {
              categoria: 'RPG',
              id: 2,
              imagem: '',
              plataformas: ['pc'],
              preco: 100,
              precoAntigo: 200,
              titulo: 'league of legends'
            }
          ]
        }
      }
    })
    debug()
  })
})
