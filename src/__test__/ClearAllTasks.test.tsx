import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ClearAllTasks from '../ClearAllTasks';

describe('ClearAllTasks Component', () => {
  const onClearAll = jest.fn();
  it('calls onClearAll when the button is clicked', () => {
    render(<ClearAllTasks onClearAll={onClearAll} isDisabled={false} />);

    const button = screen.getByText('Clear All Tasks');
    fireEvent.click(button);

    expect(onClearAll).toHaveBeenCalled();
  });

  it('disables clear all button when no tasks exist', () => {
    render(<ClearAllTasks onClearAll={onClearAll} isDisabled={true} />);
    const clearButton = screen.getByText('Clear All Tasks');
  
    expect(clearButton).toBeDisabled();
  });
});