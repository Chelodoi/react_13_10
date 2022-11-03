import { Button } from './Button';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/dom';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('render component', () => {
    render(<Button />);
  });

  it('render component with text', () => {
    render(<Button />);
    expect(screen.getByText(/Отправить/)).toBeInTheDocument();
  });

  it('render multiple component', () => {
    render(
      <>
        <Button />
        <Button />
      </>
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });

  it('button is disabled', () => {
    render(<Button disabled />);
    expect(screen.getByText(/Отправить/)).toBeDisabled();
  });

  it('button click with userEvent', () => {
    render(<Button onClick={mockHandler} />);
    const mockHandler = jest.fn();
    screen.debug();
    userEvent.click(screen.getByText(/Отправить/));
    expect(mockHandler).toBeCalledTimes(1);
  });
});
