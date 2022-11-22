import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/dom'
import { Input } from './Input'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('render component', () => {
    render(<Input onChange={() => null} />)
  })

  it('render multiple component', () => {
    render(
      <>
        <Input onChange={() => null} placeholder="Test" />
        <Input onChange={() => null} placeholder="Test" />
      </>
    )

    expect(screen.getAllByPlaceholderText('Test').length).toBe(2)
  })

  it('input change with userEvent', () => {
    const mockHandler = jest.fn()
    render(<Input onChange={mockHandler} placeholder="Test" />)
    screen.debug()
    userEvent.type(screen.getByPlaceholderText('Test'), 'Test')
    expect(mockHandler).toBeCalledTimes(4)
  })
})
