import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/dom';
import { Input } from './Input';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
  it('render component', () => {
    render(<Input changeMessage={() => null} />);
  });

  it('render multiple component', () => {
    render(
      <>
        <Input changeMessage={() => null} placeholder="Test" />
        <Input changeMessage={() => null} placeholder="Test" />
      </>
    );

    expect(screen.getAllByPlaceholderText('Test').length).toBe(2);
  });

  it('input change with userEvent', () => {
    const mockHandler = jest.fn();
    render(<Input changeMessage={mockHandler} placeholder="Test" />);
    screen.debug();
    userEvent.type(screen.getByPlaceholderText('Test'), 'Test');
    expect(mockHandler).toBeCalledTimes(4);
  });
});
